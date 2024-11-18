const hre = require("hardhat");

async function deployProxy() {
  const owner = "0xE8c6D8db1a97BCbC16DfAdD46E7Ad5594b5117D9";
  // Amoy: 0x36440da1D98FF46637f0b98AAA082bc77977B49B
  // Mainnet: 0x0b5e6100243f793e480DE6088dE6bA70aA9f3872
  // CtChain: 0x77B2252d6c2ffEFC11CbD17308d840bA12b9BDe9
  const lensPermissionlessCreator =
    "0x77B2252d6c2ffEFC11CbD17308d840bA12b9BDe9";
  const signupPrice = "1000000000000000000";

  const HeyLensSignup = await hre.ethers.getContractFactory("HeyLensSignupV2");
  const deployProxy = await hre.upgrades.deployProxy(HeyLensSignup, [
    owner,
    lensPermissionlessCreator,
    signupPrice
  ]);
  await deployProxy.deployed();

  console.log(`HeyLensSignup deployed to ${await deployProxy.address}`);
}

deployProxy().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
