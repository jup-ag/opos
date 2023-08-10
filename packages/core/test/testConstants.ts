import { PublicKey } from "@solana/web3.js";
import { mainnet } from "../src/chains/mainnet";
import { configureSolana } from "../src/configureSolana";

export const testConfig = configureSolana({
  autoConnect: true,
  chain: mainnet,
});

export const TEST_WALLET = new PublicKey(
  "DEM7JJFjemWE5tjt3aC9eeTsGtTnyAs95EWhY2bM6n1o"
);
