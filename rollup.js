import { string } from "rollup-plugin-string";

const plugins = [
  string({
    // Required to be specified
    include: ["**/*.html", "**/*.css"],
  }),
];

export default [
  {
    input: "src/racial-equity-banner.js",
    output: {
      file: "racial-equity-banner.js",
      format: "iife",
    },
    plugins,
  },
  {
    input: "src/equity-bottom.js",
    output: {
      file: "racial-equity-banner-bottom.js",
      format: "iife",
    },
    plugins,
  },
  {
    input: "src/equity-fullscreen.js",
    output: {
      file: "racial-equity-banner-fullscreen.js",
      format: "iife",
    },
    plugins,
  },
];
