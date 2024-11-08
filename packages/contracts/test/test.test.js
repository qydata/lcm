const {expect} = require("chai");
const {ethers} = require("hardhat");

describe("test", function () {
    it("test createProfileWithHandleUsingCredits", async function () {
        const signers = await ethers.getSigners()
        const signer = signers[1]

        console.log(signer.address)
        let HeyLensSignupV2 = await ethers.getContractFactory("HeyLensSignupV2");
        let hetCon = await HeyLensSignupV2.attach(
            "0x038D24604118BA083bF1BBe4Cb784D7923FDFb94"
        );
        try {
            let tx = await hetCon.callStatic.createProfileWithHandleUsingCredits(
                [
                    "0xE8c6D8db1a97BCbC16DfAdD46E7Ad5594b5117D9",
                    "0x0000000000000000000000000000000000000000",
                    "0x",
                ],
                "coozw",
                [signer.address],
                // ["0x71990499e005Db4d7854eea564023AB64ca884b5"],
                {
                    gasPrice: 4800e9,
                    value: "1000000000000000000",
                }
            );
            console.log(tx);
            // await tx.wait();
            console.log(tx.hash);
        } catch (error) {
            // 捕获自定义错误并验证其类型
            if (error.data && error.data.message) {
                const decodedError = ethers.utils.toUtf8String(error.data.message);
                console.log("Decoded Error: ", decodedError);
            }

            // 验证错误是否是 InvalidFunds
            if (error.errorName === "InvalidFunds") {
                console.log("Caught expected InvalidFunds error");
            } else {
                console.error("Caught unexpected error:", error);
            }
        }
    });

    let xAbi = [
        "function setGovernance(address newGovernance)",
        "function OWNER() view returns(address)",
        "function getHandleLengthMin() external view returns (uint8)",
        "function setHandleLengthMin(uint8 newMinLength) external",
        "function getCreditBalance(address targetAddress) external view returns (uint256)",
        "function isCreditProvider(address targetAddress) external view returns (bool)",
        "function increaseCredits(address account, uint256 amount) external",
        "function setTrustStatus(address targetAddress, bool setAsUntrusted) external",
        "function addCreditProvider(address creditProvider) external",
        "function isUntrusted(address targetAddress) external view returns (bool)",
        "function whitelistProfileCreator(address profileCreator, bool whitelist) external",
        "function getGovernance() external view returns (address)",
        "function controllerContract() external view returns (address)",
        "function executeAsGovernance(\n" +
        "        address target,\n" +
        "        bytes calldata data\n" +
        "    ) external payable onlyOwnerOrControllerContract returns (bytes memory)",
    ];

    it("test setHandleLengthMin", async function () {
        // 合约的 ABI 和地址
        const contractAddress = "0x77B2252d6c2ffEFC11CbD17308d840bA12b9BDe9";

        // 获取网络提供者和签名者（账户）
        const signers = await ethers.getSigners(); // 获取钱包签名者.
        const signer = signers[1]

        console.log(signer.address)
        // 使用 ABI 和地址创建合约实例
        const leHub = new ethers.Contract(contractAddress, xAbi, signer);

        let tx = await leHub
            .setHandleLengthMin(5);
        await tx.wait();
        console.log(tx.hash);
        let getHandleLengthMin = await leHub
            .getHandleLengthMin();
        await tx.wait();
        console.log(getHandleLengthMin);
    });


    it("test addCreditProvider", async function () {
        // 合约的 ABI 和地址
        const contractAddress = "0x77B2252d6c2ffEFC11CbD17308d840bA12b9BDe9";

        const signers = await ethers.getSigners(); // 获取钱包签名者.
        const signer = signers[1]

        console.log(signer.address)
        // 使用 ABI 和地址创建合约实例
        const leHub = new ethers.Contract(contractAddress, xAbi, signer);

        let tx = await leHub
            .addCreditProvider(signer.address);
        await tx.wait();
        console.log(tx.hash);
    });


    it("test setTrustStatus", async function () {
        // 合约的 ABI 和地址
        const contractAddress = "0x77B2252d6c2ffEFC11CbD17308d840bA12b9BDe9";

        const signers = await ethers.getSigners(); // 获取钱包签名者.
        const signer = signers[1]

        console.log(signer.address)
        // 使用 ABI 和地址创建合约实例
        const leHub = new ethers.Contract(contractAddress, xAbi, signer);

        let tx = await leHub
            .setTrustStatus("0x038D24604118BA083bF1BBe4Cb784D7923FDFb94", false);
        await tx.wait();
        console.log(tx.hash);
    });

    it("test increaseCredits", async function () {
        // 合约的 ABI 和地址
        const contractAddress = "0x77B2252d6c2ffEFC11CbD17308d840bA12b9BDe9";

        // 获取网络提供者和签名者（账户）
        const signers = await ethers.getSigners(); // 获取钱包签名者.
        const signer = signers[1]

        console.log(signer.address)
        // 使用 ABI 和地址创建合约实例
        const leHub = new ethers.Contract(contractAddress, xAbi, signer);

        // !_isCreditProvider[msg.sender] ==false
        console.log(await leHub.isCreditProvider(signer.address));

        // _isUntrusted[account] ==false
        console.log(await leHub.isUntrusted("0x038D24604118BA083bF1BBe4Cb784D7923FDFb94"));

        // _isUntrusted[account] ==false
        console.log(await leHub.getCreditBalance("0x038D24604118BA083bF1BBe4Cb784D7923FDFb94"));

        let tx = await leHub
            .increaseCredits("0x038D24604118BA083bF1BBe4Cb784D7923FDFb94", 2);
        await tx.wait();
        console.log(tx);
    });

    it("test getGovernance", async function () {
        // 合约的 ABI 和地址
        const contractAddress = "0x850CFD1FBDBb7221832C5d35385b1c4b4c06Dc5f";

        // 获取网络提供者和签名者（账户）
        const signers = await ethers.getSigners(); // 获取钱包签名者.
        const signer = signers[1]

        console.log(signer.address)
        // 使用 ABI 和地址创建合约实例
        const leHub = new ethers.Contract(contractAddress, xAbi, signer);
        console.log(await leHub.callStatic.getGovernance())
    });
    it("test whitelistProfileCreator", async function () {
        // 合约的 ABI 和地址
        const contractAddress = "0xa260aC83ba6aEF0B23579e51a5da50f98081A6B0";
        const targetInterface = new ethers.utils.Interface(xAbi);

        // 获取网络提供者和签名者（账户）
        const signers = await ethers.getSigners(); // 获取钱包签名者.
        const signer = signers[1]

        console.log(signer.address)
        // 使用 ABI 和地址创建合约实例
        const leHub = new ethers.Contract(contractAddress, xAbi, signer);
        const data = targetInterface.encodeFunctionData("whitelistProfileCreator", ["0x77B2252d6c2ffEFC11CbD17308d840bA12b9BDe9",true]);
        console.log(await leHub.controllerContract())
        let tx = await leHub
            .executeAsGovernance("0x850CFD1FBDBb7221832C5d35385b1c4b4c06Dc5f", data);
        await tx.wait();
        console.log(tx);
    });
});
