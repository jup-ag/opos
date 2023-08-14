import { z } from "zod";
import { Connection } from "@solana/web3.js";
import { SolanaConfig } from "./types/config";

export type { SolanaConfig };

export interface ConfigureSolanaProps {
  // TODO: add support for wallet connect
  autoConnect: boolean;
  rpcUrl: string;
}

const ConfigureSolanaPropsSchema = z.object({
  autoConnect: z.boolean(),
  rpcUrl: z.string(),
});

export const configureSolana = (config: ConfigureSolanaProps): SolanaConfig => {
  ConfigureSolanaPropsSchema.parse(config);

  const connection = new Connection(config.rpcUrl);

  return {
    ...config,
    connection,
  };
};
