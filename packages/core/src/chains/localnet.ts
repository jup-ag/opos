import { Chain } from "../types/chain";

export const localnet = {
  id: 101,
  name: "Localnet",
  rpcUrls: {
    default: "http://localhost:8899",
    public: "http://localhost:8899",
  },
} as const satisfies Chain;
