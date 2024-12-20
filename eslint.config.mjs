import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals")];

module.exports = {
  parser: "@typescript-eslint/parser", // Use TypeScript parser
  parserOptions: {
    ecmaVersion: 2021, // Latest ECMAScript version
    sourceType: "module", // Enable ES modules
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended", // Base ESLint rules
    "plugin:@typescript-eslint/recommended", // TypeScript rules
  ],
  rules: {
    // Custom rules (optional)
  },
};


export default eslintConfig;
