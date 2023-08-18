import { Chain } from "../types/chain";

export const testnet = {
  id: 102,
  name: "Testnet",
  rpcUrls: {
    default: "https://api.testnet.solana.com",
    public: "https://api.testnet.solana.com",
  },
} as const satisfies Chain;
