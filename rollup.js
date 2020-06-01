import { string } from "rollup-plugin-string";

const plugins = [
  string({
    // Required to be specified
    include: ["**/*.html", "**/*.css"],
  }),
];

export default [
  {
    input: "src/allies.js",
    output: {
      file: "allies.js",
      format: "iife",
    },
    plugins,
  },
  {
    input: "src/allies-bottom.js",
    output: {
      file: "allies-bottom.js",
      format: "iife",
    },
    plugins,
  },
  {
    input: "src/allies-fullscreen.js",
    output: {
      file: "allies-fullscreen.js",
      format: "iife",
    },
    plugins,
  },
];
