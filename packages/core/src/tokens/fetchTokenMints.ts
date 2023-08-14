import { PublicKey } from "@solana/web3.js";
import { SolanaConfig } from "../types/config";
import { MintAccount, decodeMintAccount } from "./struct";
import type { AccountWithPubkey } from "../types";
import { chunkedGetMultipleAccountInfos } from "../utils/chunkedGetMultipleAccounts";

export const fetchTokenMint = async (
  config: SolanaConfig,
  mint: PublicKey
): Promise<AccountWithPubkey<MintAccount>> => {
  const [accountWithPubkey] = await fetchMultipleTokenMints(config, [mint]);

  if (!accountWithPubkey) {
    throw new Error(`Failed to fetch ${mint.toString()}!`);
  }

  return accountWithPubkey;
};

export const fetchMultipleTokenMints = async (
  config: SolanaConfig,
  mints: PublicKey[]
): Promise<AccountWithPubkey<MintAccount>[]> => {
  const accounts = await chunkedGetMultipleAccountInfos(
    config.connection,
    mints
  );

  return accounts.map(({ pubkey, account }) => {
    if (!account) {
      throw new Error(`Account ${pubkey.toString()} not found!`);
    }

    return {
      pubkey,
      account: decodeMintAccount(account.data),
    };
  });
};
