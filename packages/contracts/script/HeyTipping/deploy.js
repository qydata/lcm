let hre = require("hardhat");
async function deployProxy() {
    const owner = "0xE8c6D8db1a97BCbC16DfAdD46E7Ad5594b5117D9";
    const feesBps = "500"; // 5%

    const HeyTipping = await hre.ethers.getContractFactory("HeyTipping");
    const deployProxy = await hre.upgrades.deployProxy(HeyTipping, [
        owner,
        feesBps
    ]);
    await deployProxy.deployed();

    console.log(`HeyTipping deployed to ${await deployProxy.address}`);
}

deployProxy().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
