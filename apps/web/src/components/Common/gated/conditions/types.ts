
export enum SupportedChains {

  AMOY = "amoy",
  CT_CHAIN = "ctchain"
}

export enum SupportedChainId {
  CT_CHAIN = 27
}

const SUPPORTED_CHAIN_IDS = Object.values(SupportedChainId);

export function isSupportedChainId(
  chainId: number
): chainId is SupportedChainId {
  return SUPPORTED_CHAIN_IDS.includes(chainId);
}

export type DecryptionContext = {
  /**
   * Identifies the Profile ID of the user who is trying to decrypt the metadata.
   *
   * This is used to determine whether the user has access to the metadata.
   * The {@link Signer} provided in the constructor MUST be the owner OR
   * an authorized Profile Manager of the specified Profile.
   */
  profileId?: string;
};
