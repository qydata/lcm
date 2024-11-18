import {
  BaseStorageSchema,
  type IStorageProvider,
  Storage
} from "@lens-protocol/storage";
import { z } from "zod";

export const AuthSigData: z.Schema<any, z.ZodTypeDef, object> = z
  .object({
    sig: z.string(),
    derivedVia: z.string(),
    signedMessage: z.string(),
    address: z.string()
  })
  .strict();

export function createAuthStorage(
  storageProvider: IStorageProvider,
  namespace: string
) {
  const authSigSchema = new BaseStorageSchema(
    `lens.${namespace}.gated`,
    AuthSigData
  );
  return Storage.createForSchema(authSigSchema, storageProvider);
}
