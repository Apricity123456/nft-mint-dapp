require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { PRIVATE_KEY_0, PRIVATE_KEY_1, PRIVATE_KEY_2 } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    hardhat: {
      chainId: 31337, // 本地测试链的链 ID
      accounts: [
        {
          privateKey: PRIVATE_KEY_0,
          balance: "10000000000000000000000", // 初始账户余额（10000 ETH）
        },
        {
          privateKey: PRIVATE_KEY_1,
          balance: "10000000000000000000000", // 初始账户余额（10000 ETH）
        },
        {
          privateKey: PRIVATE_KEY_2,
          balance: "10000000000000000000000", // 初始账户余额（10000 ETH）
        },
      ],
    },
    // 如果需要使用其他网络，可以在这里添加对应的配置
    localhost: {
      url: "http://127.0.0.1:8545",  // 本地测试链的 RPC 地址
      chainId: 31337, // 本地测试链的链 ID
    },
  },
};
