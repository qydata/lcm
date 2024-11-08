let hre = require("hardhat");
const { ethers } = require("hardhat");
async function upgradeProxy() {
  const PROXY_ADDRESS = "0xC7B3fA51F979C84E2f8f1CEB54Dc57307d8e294d";

  const HeyLensSignupV2 = await ethers.getContractFactory("HeyLensSignupV2");
  const heyC = await HeyLensSignupV2.attach(PROXY_ADDRESS);
  console.log(await heyC.OWNER());
}

upgradeProxy().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
