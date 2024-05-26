/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "object-curly-spacing": ["error", "always"],
    "max-len": ["error", { code: 100, tabWidth: 2 }],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-types": "off",
  },
};
