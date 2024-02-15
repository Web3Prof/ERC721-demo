/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const PRIVATE_KEY = process.env.PRIVATE_KEY ?? "";
const SEPOLIA_API_KEY = process.env.SEPOLIA_API_KEY ?? "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY ?? "";

module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {},
    localnet: {
      url: "http://127.0.0.1:8545/"
    },
    sepolia: {
      url: SEPOLIA_API_KEY,
      accounts: [PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
};
