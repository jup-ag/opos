import { describe, expect, it } from "vitest";
import { TEST_WALLET, testConfig } from "../testConstants";
import { fetchTokenAccountsByOwner } from "../../src/tokens/fetchTokenAccounts";

describe("fetchTokenAccounts", () => {
  it("should work", async () => {
    // TODO: to have a better rpc
    // const accounts = await fetchTokenAccountsByOwner(testConfig, TEST_WALLET);
    // const account = accounts.find(
    //   ({ pubkey }) =>
    //     pubkey.toString() === "9e9F1SZxxgJcTpMMrj7B8yfRWfbYn3xnpnQy1DyvqeqM"
    // );
    // expect(account).toBeDefined();
    // expect(account).toMatchInlineSnapshot(`
    //   {
    //     "account": {
    //       "amount": 100209787n,
    //       "closeAuthority": "11111111111111111111111111111111",
    //       "closeAuthorityOption": 0,
    //       "delegate": "11111111111111111111111111111111",
    //       "delegateOption": 0,
    //       "delegatedAmount": 0n,
    //       "isNative": 0n,
    //       "isNativeOption": 0,
    //       "mint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    //       "owner": "DEM7JJFjemWE5tjt3aC9eeTsGtTnyAs95EWhY2bM6n1o",
    //       "state": 1,
    //     },
    //     "pubkey": "9e9F1SZxxgJcTpMMrj7B8yfRWfbYn3xnpnQy1DyvqeqM",
    //   }
    // `);
  });
});
