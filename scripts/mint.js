const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // 👈 填你刚刚部署成功的地址

  const nft = await hre.ethers.getContractAt("MyNFT", contractAddress);

  const tx = await nft.mintNFT(
    deployer.address,
    "https://gateway.pinata.cloud/ipfs/bafkreidrdms4kakvv4k4zdlswpctyauxgnwtf3ij5a6ahspjlov53nfyb4"
  );

  await tx.wait();
  console.log("NFT minted to:", deployer.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
