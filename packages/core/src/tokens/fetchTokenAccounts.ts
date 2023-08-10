import { PublicKey } from "@solana/web3.js";
import { SolanaConfig } from "../types/config";
import { TOKEN_PROGRAM_ID, TOKEN_2022_PROGRAM_ID } from "@solana/spl-token";
import { decodeTokenAccount, TokenAccount } from "./struct";
import { AccountWithPubkey } from "../types";
import { chunkedGetMultipleAccountInfos } from "../utils/chunkedGetMultipleAccounts";

export const fetchTokenAccount = async (
  config: SolanaConfig,
  account: PublicKey
): Promise<AccountWithPubkey<TokenAccount>> => {
  const [accountWithPubkey] = await fetchMultipleTokenAccounts(config, [
    account,
  ]);

  if (!accountWithPubkey) {
    throw new Error(`Failed to fetch ${account.toString()}!`);
  }

  return accountWithPubkey;
};

export const fetchMultipleTokenAccounts = async (
  config: SolanaConfig,
  accounts: PublicKey[]
): Promise<AccountWithPubkey<TokenAccount>[]> => {
  const accountWithInfos = await chunkedGetMultipleAccountInfos(
    config.connection,
    accounts
  );

  return accountWithInfos.map(({ pubkey, account }) => {
    if (!account) {
      throw new Error(`Account ${pubkey.toString()} not found!`);
    }

    return {
      pubkey,
      account: decodeTokenAccount(account.data),
    };
  });
};

export const fetchTokenAccountsByOwner = async (
  config: SolanaConfig,
  owner: PublicKey
): Promise<AccountWithPubkey<TokenAccount>[]> => {
  const accounts = await config.connection.getTokenAccountsByOwner(owner, {
    programId: TOKEN_PROGRAM_ID,
  });

  return accounts.value.map((account) => {
    return {
      account: decodeTokenAccount(account.account.data),
      pubkey: account.pubkey,
    };
  });
};

export const fetchToken2022AccountsByOwner = async (
  config: SolanaConfig,
  owner: PublicKey
): Promise<AccountWithPubkey<TokenAccount>[]> => {
  const accounts = await config.connection.getTokenAccountsByOwner(owner, {
    programId: TOKEN_2022_PROGRAM_ID,
  });

  return accounts.value.map((account) => {
    return {
      account: decodeTokenAccount(account.account.data),
      pubkey: account.pubkey,
    };
  });
};
