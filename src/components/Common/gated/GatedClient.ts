/* eslint-disable no-case-declarations */
import * as raw from "@lens-protocol/metadata";
import {
  type PromiseResult,
  assertError,
  assertNever,
  failure,
  success
} from "@lens-protocol/shared-kernel";
import type { IStorage } from "@lens-protocol/storage";

import type * as gql from "@components/Common/gated/graphql";
// pages/api/encrypt.js
import CryptoJS from "crypto-js";
import { hydrateAuthSky, signOut } from "../../../store/persisted/useAuthStore";
import { createAuthStorage } from "./AuthStorage";
import { CannotDecryptError } from "./CannotDecryptError";
import type { ICipher, IEncryptionProvider } from "./IEncryptionProvider";
import type { DecryptionContext } from "./conditions";
import {
  PublicationMetadataDecryptor,
  PublicationMetadataEncryptor
} from "./encryption";
import type { Scalars } from "./graphql";
import { isLitError } from "./types";

export type EncCondition = {
  readonly __typename: "EoaOwnershipCondition";
  address: Scalars["Bytes"];
  encryptionKey: Scalars["String"];
  publicKey: Scalars["String"];
};

export type OrCondition = {
  readonly __typename: "OrCondition";
  readonly criteria: ReadonlyArray<EncCondition>;
};

/**
 * As per [EIP-4361](https://eips.ethereum.org/EIPS/eip-4361) the information
 * provided will be used to create a SIWE message.
 *
 * @example
 * ```
 * ${domain} wants you to sign in with your Ethereum account:
 * ${address}
 *
 * ${statement}
 *
 * URI: ${uri}
 * ...
 * ```
 */
export type AuthenticationConfig = {
  /**
   * The domain that is requesting the signing.
   *
   * This will be displayed to the user as well as used by compliant wallets to
   * avoid phishing attacks.
   */
  domain: string;
  /**
   * A human-readable ASCII assertion that the user will sign which MUST NOT include `\n` (the byte `0x0a`).
   *
   * This will be displayed to the user if signed using the user's wallet.
   */
  statement?: string;
  /**
   * The subject of the signing claim.
   */
  uri: string;
};

/**
 * An object implementing basic signer functionality.
 *
 * This is structurally compatible with the `ethers` `Signer` interface.
 */
export interface ISigner {
  /**
   * Returns the address of the signer.
   */
  getAddress(): string;

  /**
   * Signs a message.
   */
  signMessage(message: string): Promise<string>;
}

export type GatedClientConfig = {
  signer: ISigner;
  encryptionProvider: IEncryptionProvider;
};

export type { DecryptionContext };

function uint8arrayToHexString(buffer: Uint8Array): string {
  return buffer.reduce(
    (str, byte) => str + byte.toString(16).padStart(2, "0"),
    ""
  );
}

function aesEncrypt(key: any, data: string) {
  const encrypted = CryptoJS.AES.encrypt(data, CryptoJS.enc.Hex.parse(key), {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.ciphertext.toString(CryptoJS.enc.Hex); // 转换为Hex格式
}

function aesDecrypt(key: any, encryptedHex: any) {
  const encryptedWordArray = CryptoJS.enc.Hex.parse(encryptedHex);
  const decrypted = CryptoJS.AES.decrypt(
    { ciphertext: encryptedWordArray },
    CryptoJS.enc.Hex.parse(key),
    {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }
  );
  return decrypted.toString(CryptoJS.enc.Utf8); // 转换为UTF-8字符串
}

// 使用公钥进行非对称加密
async function asymmetricEncrypt(
  publicKeyHex: { match: (arg0: RegExp) => any[] },
  data: string | undefined
) {
  const publicKeyBuffer = Uint8Array.from(
    publicKeyHex.match(/.{1,2}/g).map((byte) => Number.parseInt(byte, 16))
  );
  const publicKey = await window.crypto.subtle.importKey(
    "spki",
    publicKeyBuffer,
    {
      name: "RSA-OAEP",
      hash: "SHA-256"
    },
    false,
    ["encrypt"]
  );

  const encodedData = new TextEncoder().encode(data);
  const encryptedData = await window.crypto.subtle.encrypt(
    {
      name: "RSA-OAEP"
    },
    publicKey,
    encodedData
  );

  return Array.from(new Uint8Array(encryptedData))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// 使用私钥进行非对称解密
async function asymmetricDecrypt(
  privateKeyHex: { match: (arg0: RegExp) => any[] },
  encryptedDataHex: {
    match: (arg0: RegExp) => any[];
  }
) {
  const privateKeyBuffer = Uint8Array.from(
    privateKeyHex.match(/.{1,2}/g).map((byte) => Number.parseInt(byte, 16))
  );
  const privateKey = await window.crypto.subtle.importKey(
    "pkcs8",
    privateKeyBuffer,
    {
      name: "RSA-OAEP",
      hash: "SHA-256"
    },
    false,
    ["decrypt"]
  );

  const encryptedDataBuffer = Uint8Array.from(
    encryptedDataHex.match(/.{1,2}/g).map((byte) => Number.parseInt(byte, 16))
  );
  const decryptedData = await window.crypto.subtle.decrypt(
    {
      name: "RSA-OAEP"
    },
    privateKey,
    encryptedDataBuffer
  );

  return new TextDecoder().decode(decryptedData);
}

async function encryptData(pubkey, data) {
  const encryptedData = await asymmetricEncrypt(
    pubkey,
    JSON.stringify({ data: data })
  ); // 转换为Hex格式
  return Buffer.from(encryptedData, "hex");
}

async function aesEncryptData(authSign: any, data: { privateKey: any }) {
  const encryptedData = aesEncrypt(authSign, JSON.stringify({ data: data })); // 转换为Hex格式
  return Buffer.from(encryptedData, "hex");
}

async function decryptData(priKey: any, data: any) {
  return await asymmetricDecrypt(priKey, data); // 转换为UTF-8字符串
}

async function aesDecryptData(authSign: any, data: any) {
  return aesDecrypt(authSign, data); // 转换为UTF-8字符串
}

export async function saveEncryptionKey({ pubkey, symmetricKey }) {
  const encryptedKey = await encryptData(pubkey, {
    symmetricKey
  });

  return encryptedKey;
}

export async function getEncryptionKey({ priKey, toDecrypt }) {
  const decCont = await decryptData(priKey, toDecrypt);

  const decContObj = JSON.parse(decCont);
  const symmetricKeyBuffer = Uint8Array.from(
    decContObj.data.symmetricKey
      .match(/.{1,2}/g)
      .map((byte: string) => Number.parseInt(byte, 16))
  );
  return symmetricKeyBuffer;
}

export async function aesEncryptionKey({ authSign, privateKey }) {
  const encryptedKey = await aesEncryptData(authSign, {
    privateKey
  });

  return encryptedKey;
}

export async function aesDecryptKey({ authSign, toDecrypt }) {
  const decCont = await aesDecryptData(authSign, toDecrypt);

  const decContObj = JSON.parse(decCont);
  // const symmetricKeyBuffer = Uint8Array.from(decContObj.data.privateKey.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
  // return symmetricKeyBuffer;
  return decContObj.data.privateKey;
}

export async function getOrCreateAuthSig() {
  const sKey = hydrateAuthSky();
  if (sKey.authSign) {
    // return sKey.authSign;
    return {
      authSign: sKey.authSign,
      profile: sKey.profile
    };
  } else {
    console.log('no sKey.authSign lagout 261')
    signOut();
  }
}

async function retrieveEncryptionKey<
  T extends gql.EncryptedFragmentOfAnyPublicationMetadata
>(
  encryptedMetadata: T,
  publication: { by: { ownedBy: string } },
  address: string
): Promise<Uint8Array> {
  const { authSign, profile } = await getOrCreateAuthSig();

  try {
    let toDecrypt;

    if (publication.by.ownedBy.toLowerCase() === address.toLowerCase()) {
      toDecrypt = encryptedMetadata.encryptedWith.encryptionKey;
    } else {
      const _accessCondition = encryptedMetadata.encryptedWith.accessCondition;
      if (_accessCondition && _accessCondition.length > 0) {
        for (const accessConditionKey in _accessCondition) {
          if (
            _accessCondition[accessConditionKey].address.toLowerCase() ===
            address.toLowerCase()
          )
            toDecrypt = _accessCondition[accessConditionKey].encryptionKey;
          break;
        }
      }
    }

    if (!toDecrypt) {
      throw "No encryption key found for this user";
    } else {
      // TODO 这里进行解密操作
      let _toDecrypt = profile.signInfo.encPrivateKey;
      _toDecrypt = _toDecrypt.replace("0x", "");
      const privateKey = await aesDecryptKey({
        authSign,
        toDecrypt: _toDecrypt
      });
      return await getEncryptionKey({
        priKey: privateKey,
        toDecrypt: toDecrypt
      });
    }
  } catch (error: unknown) {
    throw error;
  }
}

export class GatedClient {
  private readonly authentication: AuthenticationConfig;

  private readonly storage: IStorage<any>;

  private readonly signer: ISigner;

  private readonly encryptionProvider: IEncryptionProvider;

  constructor({ signer, encryptionProvider }) {
    this.authentication = {
      domain: "localhost",
      uri: "http://localhost:3000"
    };
    this.signer = signer;
    const storageProvider = localStorage;
    this.storage = createAuthStorage(storageProvider, "production");
    this.encryptionProvider = encryptionProvider;
  }

  async encryptPublicationMetadata<T extends raw.PublicationMetadata>(
    metadata: T,
    accessCondition: string | any[]
  ): PromiseResult<T, never> {
    const cipher = await this.encryptionProvider.createCipher();

    const { profile } = await getOrCreateAuthSig();

    //
    let _publicKey = profile.signInfo.publicKey;
    _publicKey = _publicKey.replace("0x", "");
    const encryptionKey = await this.saveEncryptionKey(cipher, _publicKey);

    if (accessCondition && accessCondition.length > 0) {
      for (let i = 0; i < accessCondition.length; i++) {
        const accessItem = accessCondition[i];
        const access_encryptionKey = await this.saveEncryptionKey(
          cipher,
          accessItem.publicKey
        );
        accessItem.encryptionKey = access_encryptionKey;
      }
    }

    const enc = new PublicationMetadataEncryptor(cipher);
    const { encrypted, paths } = await enc.encrypt(metadata);

    return success({
      ...encrypted,
      lens: {
        ...encrypted.lens,
        encryptedWith: {
          encryptionKey,
          accessCondition,
          provider: raw.EncryptionProvider.LIT_PROTOCOL,
          encryptedPaths: paths
        }
      }
    });
  }

  async decryptPublicationMetadataFragment<
    T extends gql.EncryptedFragmentOfAnyPublicationMetadata
  >(
    encryptedMetadata: T,
    publication: any,
    address: string | undefined
  ): PromiseResult<T, CannotDecryptError> {
    try {
      const decrypted = await this.decrypt(
        encryptedMetadata,
        publication,
        address
      );
      return success(decrypted);
    } catch (error: unknown) {
      console.trace(error);
      if (isLitError(error)) {
        return failure(new CannotDecryptError(error.message, { cause: error }));
      }
      assertError(error);
      return failure(
        new CannotDecryptError("Cannot decrypt the metadata", { cause: error })
      );
    }
  }

  private async decrypt<
    T extends gql.EncryptedFragmentOfAnyPublicationMetadata
  >(encryptedMetadata: T, publication: any, address: any): Promise<T> {
    const cipher = await this.retrieveCipher(
      encryptedMetadata,
      publication,
      address
    );
    // switch (encryptedMetadata.__typename) {
    switch (encryptedMetadata.mainContentFocus) {
      case "ArticleMetadataV3":
      case "AudioMetadataV3":
      case "CheckingInMetadataV3":
      case "EmbedMetadataV3":
      case "EventMetadataV3":
      case "ImageMetadataV3":
      case "LinkMetadataV3":
      case "LiveStreamMetadataV3":
      case "MintMetadataV3":
      case "SpaceMetadataV3":
      case "StoryMetadataV3":
      case "TextOnlyMetadataV3":
      case "ThreeDMetadataV3":
      case "TransactionMetadataV3":
      case "VideoMetadataV3":
      case "TEXT_ONLY":
      case "IMAGE":
      case "AUDIO":
      case "VIDEO":
        return new PublicationMetadataDecryptor(cipher).decrypt(
          encryptedMetadata
        );

      default:
        assertNever(encryptedMetadata, `Not supported metadata type`);
    }
  }

  private async saveEncryptionKey(
    cipher: ICipher,
    pubkey
  ): Promise<raw.LitEncryptionKey> {
    const symmetricKey = await cipher.exportKey();

    const encryptedSymmetricKey = await saveEncryptionKey({
      pubkey,
      symmetricKey: uint8arrayToHexString(symmetricKey)
    });

    return raw.toLitEncryptionKey(uint8arrayToHexString(encryptedSymmetricKey));
  }

  private async aesDecryptKey(
    authSign,
    profile
  ): Promise<raw.LitEncryptionKey> {
    const decryptPrivateKey = await aesDecryptKey({
      authSign,
      toDecrypt:
        "b6896898cf65b39afb74de04fda995f1ba3c9fca9b89e095a65f53a13e1ad6605aeee8f2faa19108ff73a80f6b93d55098eb39fffc90a144d5e97d85f1788bdf9d5a04cb13805bfe649cebca2b987594e2eb6ba8b2b271d398f74d8fe01944f2228d1a4c81bf9cec203ba2dbdb4a8ca51505666bdcfa7e16acada0ae1938b793c82031cc1c4e63e42713c458c78da3044494d165d86322b2f10e2d785f975129499154d7dcec7b5230be463b062de6d38d90993b2708b250a028d94f5ddb01da162d35322258c57f9cc5587eb346277527e17cbd59888207a8ac65458c168aa6efdbfa432b1ca82cbfdb097bb94884a0055ca2f9c289cfa3ce1029c191cfdfc3946d9d53eead2dd6f655e00b517ab0c549958822abd5a3f85181da6275074df93d83c298bb1a5b30d169119361298df4a86637de3e82a924ebf4fde38cda060e6d70f8d537921eea8c33e1446082dec0260f125e91efbe70a730e1229d7073e42640acce64a73d94568dcebe0347ea6d219ff54563d25f65642d50ee6d8af0ca7a91087704845740cf3a1c051321bfabf0045dfdebfe0ad7dd55a138d7c95ad88a561bebfba017fd4cccd6caa150bc8e7c51ec04cdce4638c98fd38fc30ee2d69055172e226f80b8aa021e018729527c4bbd92029a586793f19f68558a83720996d659b887b37a4fe3768860ccd1d122f645cf01fe24063e875d9562a56372cd3fffa313818073b5aa9f2e5dda9edd87ad064e6b46fb3498f5a8dbb76f38b387c380c2f5ee76c4c3329b341bae62dba9185e94d275a61a6f137e9ee14fa852e090afabb480cc5494a04512a57fc45d667b2f844ad64845cd41ea9e75456d7eccc8935db218cf3ad77207733108bc616854ac8a2914620cf33141d23ca435ac4ce6ad6879797f86cc831fddb0a025b3c2ac71eeca9ea0a336e993856d6f2ff624dd8620cfa1e8628f2484bd04e864fc4b80c2f0e9c1483f580c828dfd129a368b37ea8465b8d3fdbc0a2ff624097cfa1699d229351fe1f7909ce29f36a2417f72d0ac59c0ad34024c0830bf6ab1c8838ca4af99d5b52220fea1f26c5cfbd9e401eb445bb777373b6b382c6992352ddbc42efea60c5b42a0b39e926a158850b7ad3921e73784ff25fb10715c6c425459bd5098404c8f17703e7e0c21654e41e5c063d4f2bcba4dff9480bcc0c91d63dd477aaa3033650a59d1e74b5eb41885a90e21c1e1e5c9d7ff33a9bc41de853f5ccf3aeb351f10648770912999e1792341b3879104f780ca21496628d2a80df873255e36d42e845cc000a696ad39fcb90f783f66bd5e6095c08f227606da27528c63478af7b53d80f11ba022d30a2bfafddeba77ecabf6daacf252f6246d30e25835df1b7827a7c58e746de286537f3e5170921f86d38e80479988466f17dc427c044c02beeb8c1dffb084bd2f96284fbcaef084c33386d9224891d67a02074532152661b46aff6f04c5652b15818cf6cdb956eb13685257318a0def376ee10fa1ce7b0864526330f5c1029759c9db0b1ee1f89e8a6eb243e43fef95085350bbe195191e0d2e884692c3487846eb82626ddabac427bbf43ccb449c548b83afc0c9bcb35cb4f27a895031cf5fb03cd02b83d8d156d8edfd891aae00c12a472385456f3bad467572f3753a9a9dc0d2c570b33eab59d6b8eb8f83997213df2b50036424fb15158922d30eaacd5b7011de0332c593d8b8d5f2b226dc38c7612746a653aa4fc636d7ce95b2d8fcbb87da7d43c8ac30c05c78b528ef30091212eb6c316f254faf0d02193384ab9e5e95c1aa9d6ca18ce554ff36d6c19f55d6abdd09df7ad6e44126322dac7c62c7e37f3457611aa83e07aa34d86d16f275559b2681b952b11d2b5782b47449818cb9b47bc210764ad93bd6dbf9bc31dd043188b64e038245f5ea5a70efcabac43b349336f75919f6fe0d9827057cf402b9510f5d41e69b4381dc4478b3259044516252cd2e1f937165a3d846c0367cdca04f5f00ba4c8680b5765e070d370d4bf53f807716b76101d8867478135c54279fdeff7f04f03e84d839aa3cfc247bbf7da9032a58fef0f33954bc3b16f4a3524aa0203afe07b53910dd274ba22ee66f485b6a714153e5072ea576ad67f8511a63c6c3451a2d6db0939f0992764e74eaefb48eec9de7be610a8a6498500df8df8a52a41fd0778547f93a8b1581b0ba5047df9f928bf56c1c714d097ca731dda6e2aab882375e3f58fbc947367c5a0cbfa07f675cac330eb63844b7d95b571de99f311fd052b1a233a6bc7f8258faac4d8560f3232226560c3e301de98c547a829e8b6db2edccc1810b7d23a1f050f621a19e2eba783299cf8d232cba3dd5c49e8ed9b42dc889b9778524819088a5fb2a555a8b199fa3444f991634760dd3ace73b0b9c0cd326080807ecd8aeec8d422a4cc52654165d53d51fd6eba6ed33e21b9304a9fe7d561c9273ed1280c95f7e956555b1e28bd19037ca8dbe83d398f6d4a40360a9b28c1e7384901d958293f8f33e268ad9863635224d6ab1da3aa019684f630ae6fa6b052617fdb60e83e04be532b42da3c8f04137e35ed033634ff5de8973daa3e3b2cd4e38a0bfc685b73c48d0b5f5ec04ccb049c700b1c073167702516e24eddc76e91a4f23f66a7630fe9cc67fe3117717779cebd639bbed625ab402aa3a3182202817b55742c4c3a1473517108a8ab49b7db1a5b0dd83b60c59213e6fd5a22a930d0e9b08e737d17d2a0a119c66877834761893c0ef2fac2049f5fe17ec9788d781675bf2aefdc0dd314b12d6fea02fb7cba28fad35e39dd4f19efc5de2b0e13da4ac3fd37ec22a8f42c5c1c5638b39913bd5b9d1983d72b4752a926ccff4a6f4c7df15a46c31ec4a1430f0939f34f44f5ee4dec540d62fffd09379a1b384ca605087c85d825daf9a34b18c3e50a03e66e7fa1203c3b3eea85cdbaf775e27030be7b90db218b6f336168428eec1d9741e6ecfe9e36b0bfe13f8a0634dd521ceeaf23994181a81cd48a9722a6043f210b76c72e6d23431c45c8f2127a418936b63d4018cf6c9ea5d9b8e75df4340664f85bfb37a8f8822530cf67e7bb7e545e2849c91a213371a7cf486d2d7ca692694d65aef3861b2e86a68602583b06028ae638bfd77bca0ec39102e4d0163a1132ef1fc37ab0a79c520b68b655dd28d7c8ab709503ef37e9d7474a2c1a1db71453153b10af8654166087e7af83d015b677fbf3c1b27208d5519ecdadea550dcb178f8f611e6f5f7ce941f531b9305c0be2f5ef9b032accd567af093c664e30e6a7dea4e3523c693caba827e7f83a5779b5fddaff768c66b9c7bc3d75996be24a2fba2fc6d3d5c6153f2e840353aa48fdbef0a65305edfab78b9799dee98100be722f2dd65521f53c84000308351b3d37af29987ed253a27fe0f01b31138d27cf194bb36e4efc5bb918d43b6fcdd389e8917a1e4b11844e41f726c674c17c4f608664af7e3"
    });
    const encryptedPrivateKeyHex = uint8arrayToHexString(decryptPrivateKey);
    console.log("encryptedPrivateKeyHex:", encryptedPrivateKeyHex);
  }

  private async retrieveCipher<
    T extends gql.EncryptedFragmentOfAnyPublicationMetadata
  >(encryptedMetadata: T, publication: any, address: any): Promise<ICipher> {
    const encryptionKey = await this.retrieveEncryptionKey(
      encryptedMetadata,
      publication,
      address
    );
    return this.encryptionProvider.importCipher(encryptionKey);
  }

  private async retrieveEncryptionKey<
    T extends gql.EncryptedFragmentOfAnyPublicationMetadata
  >(
    encryptedMetadata: T,
    publication: { by: { ownedBy: string } },
    address: string
  ): Promise<Uint8Array> {
    const { authSign, profile } = await getOrCreateAuthSig();

    try {
      let toDecrypt;

      if (publication.by.ownedBy.toLowerCase() === address.toLowerCase()) {
        toDecrypt = encryptedMetadata.encryptedWith.encryptionKey;
      } else {
        const _accessCondition =
          encryptedMetadata.encryptedWith.accessCondition;
        if (_accessCondition && _accessCondition.length > 0) {
          for (const accessConditionKey in _accessCondition) {
            if (
              _accessCondition[accessConditionKey].address.toLowerCase() ===
              address.toLowerCase()
            ) {
              toDecrypt = _accessCondition[accessConditionKey].encryptionKey;
              break;
            }
          }
        }
      }

      if (!toDecrypt) {
        throw "No encryption key found for this user";
      } else {
        // TODO 这里进行解密操作
        let _toDecrypt = profile.signInfo.encPrivateKey;
        _toDecrypt = _toDecrypt.replace("0x", "");
        const privateKey = await aesDecryptKey({
          authSign,
          toDecrypt: _toDecrypt
        });
        toDecrypt = toDecrypt.replace("0x", "");
        return await getEncryptionKey({
          priKey: privateKey,
          toDecrypt: toDecrypt
        });
      }
    } catch (error: unknown) {
      throw error;
    }
  }
}
