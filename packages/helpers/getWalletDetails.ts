interface WalletDetails {
  logo: string;
  name: string;
}

/**
 * Returns an object with the name and logo URL for the specified wallet name.
 *
 * @param name The wallet name.
 * @returns An object with the name and logo URL.
 */
const getWalletDetails = (name: string): WalletDetails => {
  const walletDetails: Record<string, WalletDetails> = {
    "Coinbase Wallet": {
      logo: `/images/wallets/coinbase.svg`,
      name: "Coinbase Wallet"
    },
    WalletConnect: {
      logo: `/images/wallets/walletconnect.svg`,
      name: "WalletConnect"
    },
    ToolWallet: {
      logo: `/logo.png`,
      name: "ToolWallet"
    }
  };
  const defaultDetails: WalletDetails = {
    logo: `/images/wallets/browser-wallet.svg`,
    name
  };

  return walletDetails[name] || defaultDetails;
};

export default getWalletDetails;
