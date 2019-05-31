import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import pkg from "./package.json"

export default [
  // For browser
  {
    input: "src/index.js",
    output: {
      name: "effectorUtils",
      file: pkg.browser,
      format: "umd"
    },
    plugins: [babel(), resolve(), commonjs()]
  },
  // For modern frontend and Node
  {
    input: "src/index.js",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" }
    ],
    plugins: [babel(), resolve(), commonjs()],
    external: ["effector"]
  }
]
