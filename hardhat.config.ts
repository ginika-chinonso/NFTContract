import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks:{
    hardhat:{
      forking: {
        enabled: true,
        //@ts-ignore
        url: process.env.MAINNET_RPC,
      }
    },
    goerli: {
      url: process.env.GOERLI_RPC,
      //@ts-ignore
      accounts: [process.env.ACC1, process.env.ACC2, process.env.ACC3],
    }
  }
};

export default config;
