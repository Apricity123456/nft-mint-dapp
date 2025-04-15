const { ethers } = require("hardhat");

async function main() {
  // 获取合约和账户
  const [sender, receiver] = await ethers.getSigners();

  // 通过合约地址连接到已部署的 MyNFT 合约
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // 替换为实际部署后的合约地址
  const MyNFT = await ethers.getContractFactory("MyNFT");
  const nft = await MyNFT.attach(contractAddress); // 连接已部署的合约

  console.log(`Using contract at ${contractAddress}`);
  
  // 获取第一个 NFT 的 tokenId
  const tokenId = 0;  // 假设你想转移的 NFT 是第一个（tokenId 0）

  // 查看发送者拥有的 NFT
  const senderBalanceBefore = await nft.balanceOf(sender.address);
  console.log(`Sender balance before transfer: ${senderBalanceBefore}`);

  // 查看接收者拥有的 NFT
  const receiverBalanceBefore = await nft.balanceOf(receiver.address);
  console.log(`Receiver balance before transfer: ${receiverBalanceBefore}`);

  // 从 sender 转移 NFT 给 receiver
  console.log(`Transferring NFT from ${sender.address} to ${receiver.address}...`);
  const tx = await nft.connect(sender).safeTransferFrom(sender.address, receiver.address, tokenId);
  await tx.wait();

  console.log("NFT transfer successful!");

  // 查看发送者和接收者的 NFT 数量
  const senderBalanceAfter = await nft.balanceOf(sender.address);
  const receiverBalanceAfter = await nft.balanceOf(receiver.address);

  console.log(`Sender balance after transfer: ${senderBalanceAfter}`);
  console.log(`Receiver balance after transfer: ${receiverBalanceAfter}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
