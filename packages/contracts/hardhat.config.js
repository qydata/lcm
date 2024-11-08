require("dotenv").config();

require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-ethers");
const MNEMONIC_PATH = "m/44'/60'/0'/0";
const MNEMONIC = process.env.MNEMONIC || '';
const config = {
    etherscan: {
        apiKey: {},
        customChains: [
            {
                network: "ctChain",
                chainId: 27,
                urls: {
                    apiURL: "https://ctblock.cn/api",
                    browserURL: "https://ctblock.cn",
                },
            },
        ]
    },
    defaultNetwork: "ctChain",
    networks: {
        ctChain: {
            timeout: 60000,
            gasPrice: 4800e9,
            url: process.env.CT_URL,
            accounts: {
                mnemonic: MNEMONIC,
                path: MNEMONIC_PATH,
                initialIndex: 0,
                count: 20,
            },
        },
    },

    solidity: {
        compilers: [
            {
                settings: {optimizer: {enabled: true}, viaIR: true},
                version: "0.8.24"
            }
        ]

    },
    mocha:{
        timeout: 60000, // 60 seconds max for running tests
    }
};
module.exports = config
