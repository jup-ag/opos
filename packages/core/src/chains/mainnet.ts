import { Chain } from "../types/chain";

export const mainnet = {
  id: 101,
  name: "MainnetBeta",
  rpcUrls: {
    default: "https://api.mainnet-beta.solana.com",
    public: "https://api.mainnet-beta.solana.com",
  },
} as const satisfies Chain;
