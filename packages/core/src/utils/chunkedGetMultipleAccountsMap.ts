import { AccountInfo, Connection, PublicKey } from "@solana/web3.js";
import { chunks } from "./chunks";

export async function chunkedGetMultipleAccountInfos(
  connection: Connection,
  pks: PublicKey[],
  chunkSize = 100
) {
  const accountInfoMap = new Map<string, AccountInfo<Buffer> | null>();
  const accountInfos = (
    await Promise.all(
      chunks(pks, chunkSize).map((chunk) =>
        connection.getMultipleAccountsInfo(chunk)
      )
    )
  ).flat();

  accountInfos.forEach((item, index) => {
    const publicKey = pks[index];

    if (publicKey) {
      accountInfoMap.set(publicKey.toString(), item);
    }
  });
  return accountInfoMap;
}
