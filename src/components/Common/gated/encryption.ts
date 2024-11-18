import type * as raw from "@lens-protocol/metadata";
import { update } from "@lens-protocol/shared-kernel";

import type { ICipher } from "./IEncryptionProvider";
import type * as gql from "./graphql";
import { resolvePathsToDecrypt, resolvePathsToEncrypt } from "./paths";

export type EncryptionResult<T extends raw.PublicationMetadata> = {
  encrypted: T;
  paths: raw.EncryptedPaths;
};

export class PublicationMetadataEncryptor {
  constructor(private readonly cipher: ICipher) {}

  async encrypt<T extends raw.PublicationMetadata>(
    metadata: T
  ): Promise<EncryptionResult<T>> {
    const paths = resolvePathsToEncrypt(metadata);

    const encrypted = await update(metadata, paths, (value) =>
      this.encryptString(value)
    );

    return {
      encrypted,
      paths
    };
  }

  private async encryptString(value: string): Promise<string> {
    return this.cipher.encrypt(value);
  }
}

export class PublicationMetadataDecryptor {
  constructor(private readonly cipher: ICipher) {}

  async decrypt<T extends gql.EncryptedFragmentOfAnyPublicationMetadata>(
    encrypted: T
  ): Promise<T> {
    const paths = resolvePathsToDecrypt(encrypted);
    // console.log(paths)
    return update(encrypted, paths, (value) => this.decryptString(value));
  }

  private async decryptString(value: string): Promise<string> {
    return await this.cipher.decrypt(value);
  }
}
