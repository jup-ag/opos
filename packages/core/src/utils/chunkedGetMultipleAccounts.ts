import { AccountInfo, Connection, PublicKey } from "@solana/web3.js";
import { chunks } from "./chunks";
import { AccountWithPubkey } from "../types";

export async function chunkedGetMultipleAccountInfos(
  connection: Connection,
  pks: PublicKey[],
  chunkSize = 100
): Promise<AccountWithPubkey<AccountInfo<Buffer> | null>[]> {
  const accountInfos = (
    await Promise.all(
      chunks(pks, chunkSize).map((chunk) =>
        connection.getMultipleAccountsInfo(chunk)
      )
    )
  ).flat();

  return accountInfos.map((item, index) => {
    const pubkey = pks[index];

    // should be impossible to reach this state
    if (!pubkey) {
      throw new Error("No public key");
    }

    return {
      pubkey,
      account: item,
    };
  });
}
