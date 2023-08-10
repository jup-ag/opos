import { join } from "path";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  format: ["esm", "cjs"],
  target: "node18",
  tsconfig: join(__dirname, "../../tsconfig.json"),
  splitting: true,
  sourcemap: true,
  minify: false,
  clean: true,
  skipNodeModulesBundle: true,
  dts: true,
  external: ["node_modules"],
}));
