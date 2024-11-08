export const RsaSignUpABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "encPrivateKey",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "publicKey",
                "type": "bytes"
            }
        ],
        "name": "UserSignedUp",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "signInfos",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes",
                "name": "encPrivateKey",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "publicKey",
                "type": "bytes"
            }
        ],
        "name": "signup",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
