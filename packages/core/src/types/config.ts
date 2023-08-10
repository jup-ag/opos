import { Connection } from "@solana/web3.js";
import { Chain } from "./chain";

export interface SolanaConfig {
  autoConnect: boolean;
  chains: Chain[];
  connection: Connection;
  activeChain: Chain;
}
