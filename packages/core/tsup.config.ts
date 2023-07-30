import { join } from "path";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
	format: ["esm", "cjs"],
	target: "node18",
	splitting: true,
	sourcemap: true,
	minify: false,
	clean: true,
	skipNodeModulesBundle: true,
	dts: true,
	external: ["node_modules"],
}));
