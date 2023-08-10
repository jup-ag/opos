import { describe, expect, it } from "vitest";
import { configureSolana } from "../src/configureSolana";
import { mainnet } from "../src/chains/mainnet";

describe("configureSolana", () => {
  it("should work", () => {
    const config = configureSolana({
      autoConnect: true,
      chain: mainnet,
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
