import type { PublicKey } from "@solana/web3.js";

export interface AccountWithPubkey<T> {
  pubkey: PublicKey;
  account: T;
}
