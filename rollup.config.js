import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

export default {
  input: "split-views.js",
  output: [
    {
      file: 'build/index.esm.js',
      format: 'esm',
      sourcemap: false,

    },
    {
      name: 'SplitViews',
      file: 'build/index.umd.js',
      format: 'umd',
      sourcemap: false
    }
  ],
  plugins: [
    postcss({
      babelrc: false,
      modules: false,
      plugins: [],
      extract: true,
      minimize: true,
      sourceMap: false,
      babelHelpers: 'runtime'
    }),
    terser()
  ]
};