import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import pluginReactJsxRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  { files: ["**/*.{js,jsx}"] },
  {
    ignores: [
      "node_modules/*",
      "public/*",
      ".netlify/*",
      "netlify/.netlify/*",
      "dev",
    ],
  },
  { languageOptions: { globals: globals.browser } },
  { settings: { react: { version: "detect" } } },
  pluginJs.configs.recommended,
  pluginReactConfig,
  pluginReactJsxRuntime,
  eslintPluginPrettierRecommended,
  {
    rules: {
      "prettier/prettier": "error",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "react/prop-types": "off",
    },
  },
];
