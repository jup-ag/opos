import { describe, expect, it } from "vitest";
import { TEST } from "../src/index";

describe("dummy test", () => {
	it("should work", () => {
		expect(TEST).toBe(1);
	});
});
