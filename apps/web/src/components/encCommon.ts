import sha256 from "@hey/helpers/sha256";
import {aesEncryptionKey} from "@components/Common/gated/GatedClient";

export * from "./Common/gated/CannotDecryptError";
export * from "./Common/gated/environments";
export * from "./Common/gated/GatedClient";
export {isEncryptedPublicationMetadata} from "./Common/gated/graphql";
export type {
    EncryptablePublicationMetadataFragment,
    EncryptedFragmentOf
} from "./Common/gated/graphql";
export * from "./Common/gated/IEncryptionProvider";
const generateAsymmetricKeyPair = async () => {
    const keyPair = await window.crypto.subtle.generateKey(
        {
            name: "RSA-OAEP",
            modulusLength: 2048,
            publicExponent: new Uint8Array([1, 0, 1]), // 65537
            hash: "SHA-256"
        },
        true, // 可导出
        ["encrypt", "decrypt"] // 用途
    );

    const publicKey = await window.crypto.subtle.exportKey("spki", keyPair.publicKey);
    const privateKey = await window.crypto.subtle.exportKey("pkcs8", keyPair.privateKey);

    return {
        publicKeyHex: Array.from(new Uint8Array(publicKey)).map(b => b.toString(16).padStart(2, '0')).join(''),
        privateKeyHex: Array.from(new Uint8Array(privateKey)).map(b => b.toString(16).padStart(2, '0')).join('')
    };
}

const upSignInfo = async (signature, profile) => {
    let {publicKeyHex, privateKeyHex} = await generateAsymmetricKeyPair()
    let encPrivateKeyHex = await aesEncryptionKey({
        authSign: sha256(signature),
        privateKey: privateKeyHex
    })

    // 对数据上链
    return {
        signInfo: {
            user: profile.ownedBy,
            encPrivateKey: encPrivateKeyHex.toString("hex"),
            publicKey: publicKeyHex
        }
    }
}


export {upSignInfo, generateAsymmetricKeyPair}
