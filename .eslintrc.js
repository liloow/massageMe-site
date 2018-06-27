"use strict";
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  plugins: ["vue", "prettier", "html"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "comma-dangle": [
      "warn",
      {
        arrays: "always",
        objects: "always",
        imports: "never",
        exports: "never",
        functions: "ignore",
      },
    ],
    "eol-last": "error",
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
  },
};
