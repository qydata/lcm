import { base64StringToBlob, blobToBase64String } from "./browser";
import { SYMM_KEY_ALGO_PARAMS } from "./constants";
import { decryptWithSymmetricKey, encryptWithSymmetricKey } from "./crypto";

import type { ICipher, IEncryptionProvider } from "./IEncryptionProvider";

class WebCryptoCipher implements ICipher {
  private readonly encoder = new TextEncoder();
  private readonly decoder = new TextDecoder();

  constructor(private readonly cryptoKey: CryptoKey) {}

  async encrypt(data: string): Promise<string> {
    const buffer = this.encoder.encode(data);
    const blob = await encryptWithSymmetricKey(this.cryptoKey, buffer);
    return blobToBase64String(blob);
  }

  async decrypt(data: string): Promise<string> {
    const encryptedBlob = base64StringToBlob(data);
    const decryptedArrayBuffer = await decryptWithSymmetricKey(
      encryptedBlob,
      this.cryptoKey
    );
    return this.decoder.decode(decryptedArrayBuffer);
  }

  async exportKey(): Promise<Uint8Array> {
    return new Uint8Array(await crypto.subtle.exportKey("raw", this.cryptoKey));
  }
}

export class WebCryptoEncryptionProvider implements IEncryptionProvider {
  async createCipher(): Promise<ICipher> {
    const cryptoKey = await crypto.subtle.generateKey(
      SYMM_KEY_ALGO_PARAMS,
      true,
      ["encrypt", "decrypt"]
    );
    return new WebCryptoCipher(cryptoKey);
  }

  async importCipher(key: Uint8Array): Promise<ICipher> {
    // 提取值并组成数组
    const valuesArray = Object.values(key);

    // 创建 Uint8Array
    const uint8Array = new Uint8Array(valuesArray);
    const cryptoKey = await crypto.subtle.importKey(
      "raw",
      // key,
      uint8Array,
      SYMM_KEY_ALGO_PARAMS,
      true,
      ["encrypt", "decrypt"]
    );
    return new WebCryptoCipher(cryptoKey);
  }
}
