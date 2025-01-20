// eslint.config.mjs
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import testingLibrary from "eslint-plugin-testing-library";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "@typescript-eslint": typescriptEslint,
      "jsx-a11y": jsxA11y,
      "testing-library": testingLibrary
    },
    rules: /** @type {import("eslint").Linter.RulesRecord} */ ({
      // General React rules
      "react/react-in-jsx-scope": "off", // Modern JSX runtime doesn't require React in scope
      "react/jsx-uses-react": "off", // Modern JSX runtime doesn't require React in scope
      "react/prop-types": "off", // TypeScript for prop validation
      "react/jsx-key": "error",

      // React Hooks rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // TypeScript rules
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^.*", ignoreRestSiblings: true } // Ignore variables starting with `_`
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports" } // Enforce type imports
      ],

      // Testing Library rules
      "testing-library/no-debugging-utils": ["warn"],
      "testing-library/no-dom-import": ["error", "react"] // Enforce React import
    }),
    settings: {
      react: {
        version: "detect" // Automatically detect React version
      }
    }
  }
];
