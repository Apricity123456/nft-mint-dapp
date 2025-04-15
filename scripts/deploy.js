// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const NFT = await hre.ethers.getContractFactory("MyNFT");
  const nft = await NFT.deploy(deployer.address);
  await nft.waitForDeployment();

  const address = await nft.getAddress();
  console.log("✅ 合约部署成功，地址：", address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
