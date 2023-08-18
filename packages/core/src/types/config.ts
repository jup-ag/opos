import { Connection } from "@solana/web3.js";

export interface SolanaConfig {
  autoConnect: boolean;
  connection: Connection;
}
