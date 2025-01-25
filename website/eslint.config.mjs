import typescriptParser from "@typescript-eslint/parser";

import config from "./eslint.config.mjs";

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    ...config[0],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  }
];
