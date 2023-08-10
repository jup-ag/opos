import { Chain } from "../types/chain";

export const devnet = {
  id: 103,
  name: "Devnet",
  rpcUrls: {
    default: "https://api.devenet.solana.com",
    public: "https://api.devenet.solana.com",
  },
} as const satisfies Chain;
