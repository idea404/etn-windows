import { HardhatUserConfig } from "hardhat/config";

import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";

export enum Wallets {
  richWalletAddress = "0x36615Cf349d7F6344891B1e7CA7C72883F5dc049",
  richWalletPrivateKey = "0x7726827caac94a7f9e1b160f7ea819f172f7b6f9d2a97f992c38edeab82d4110",
}

export const localConfig = {
  gasLimit: { gasLimit: 8000000 },
  L1Network: "http://127.0.0.1:8545",
  L2Network: "http://127.0.0.1:8011",
  chainId: 260,
  privateKey: Wallets.richWalletPrivateKey,
};

const config: HardhatUserConfig = {
  zksolc: {
    version: "latest",
    settings: {
      isSystem: true,
    },
  },
  defaultNetwork: "zkSyncTestnet",
  networks: {
    hardhat: {
      zksync: true,
    },
    zkSyncTestnet: {
      url: localConfig.L2Network,
      ethNetwork: localConfig.L1Network, // Can also be the RPC URL of the network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
      zksync: true,
    },
  },
  solidity: {
    version: "0.8.17",
  },
};

export default config;
