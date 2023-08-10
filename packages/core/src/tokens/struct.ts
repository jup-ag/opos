import {
  AccountLayout as TokenAccountLayout,
  type RawAccount as TokenAccount,
  MintLayout,
  RawMint as MintAccount,
} from "@solana/spl-token";

export const decodeTokenAccount = (data: Buffer): TokenAccount => {
  return TokenAccountLayout.decode(data);
};

export const decodeMintAccount = (data: Buffer): MintAccount => {
  return MintLayout.decode(data);
};

export { type TokenAccount, type MintAccount };
