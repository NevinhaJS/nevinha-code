import typescript from "rollup-plugin-typescript2";

const plugins = [typescript()];

const createConfig = (filename) => ({
  input: `src/${filename}.ts`,
  external: ["react"],
  output: [
    {
      file: `./dist/${filename}.js`,
      format: "umd",
      name: "foo",
    },
    {
      file: `./dist/${filename}.cjs.js`,
      format: "cjs",
      name: "foo",
      exports: "named",
    },
    {
      file: `./dist/${filename}.esm.js`,
      format: "es",
    },
  ],
  plugins,
});

const configs = ["index"].map((filename) => createConfig(filename));

export default configs;
