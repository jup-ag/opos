import { describe, expect, it } from "vitest";
import { configureSolana } from "../src/configureSolana";

describe("configureSolana", () => {
  it("should work", () => {
    const config = configureSolana({
      autoConnect: true,
      rpcUrl: "https://api.mainnet-beta.solana.com",
    });

    expect(config.connection).toBeDefined();
  });

  it("should throw", () => {
    expect(() =>
      configureSolana(
        // @ts-expect-error
        {
          autoConnect: true,
        }
      )
    ).toThrowError();
  });
});
