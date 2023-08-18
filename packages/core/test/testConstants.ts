import { PublicKey } from "@solana/web3.js";
import { configureSolana } from "../src/configureSolana";

export const testConfig = configureSolana({
  autoConnect: true,
  rpcUrl: "https://api.mainnet-beta.solana.com",
});

export const TEST_WALLET = new PublicKey(
  "DEM7JJFjemWE5tjt3aC9eeTsGtTnyAs95EWhY2bM6n1o"
);
