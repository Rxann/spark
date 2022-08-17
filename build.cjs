const esbuild = require("esbuild");
const { typecheckPlugin } = require("@jgoz/esbuild-plugin-typecheck");
const { dtsPlugin } = require("esbuild-plugin-d.ts");

const config = {
  target: "node16",
  sourcemap: true,
  platform: "node",
  minify: true,
  format: "cjs",
  entryPoints: ["./index.ts"],
  outfile: "./dist/cjs.js",
  plugins: [typecheckPlugin(), dtsPlugin()],
};
esbuild.build(config).catch((err) => {
  console.error(err);
  process.exit(1);
});
