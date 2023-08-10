import { z } from "zod";
import { Connection } from "@solana/web3.js";
import { type Chain } from "./types/chain";
import { SolanaConfig } from "./types/config";

// possibly use a typechecker
interface ConfigureSolanaProps {
  autoConnect: boolean;
  chain: Chain | Chain[];
}

const ChainSchema = z.object({
  id: z.number(),
  name: z.string(),
  rpcUrls: z.record(z.string().and(z.enum(["default", "public"])), z.string()),
});

const ConfigureSolanaPropsSchema = z.object({
  autoConnect: z.boolean(),
  chain: z.union([z.array(ChainSchema).min(1), ChainSchema]),
});

export const configureSolana = (config: ConfigureSolanaProps): SolanaConfig => {
  ConfigureSolanaPropsSchema.parse(config);

  const chains = Array.isArray(config.chain) ? config.chain : [config.chain];

  const activeChain = chains[0];

  if (!activeChain) throw new Error("No chains provided");

  const connection = new Connection(activeChain.rpcUrls.default);

  return {
    ...config,
    chains,
    activeChain,
    connection,
  };
};
