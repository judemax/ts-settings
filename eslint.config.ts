import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
  tseslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd(),
      },
    },
  },
  {
    files: ["*.config.ts", "*.config.mjs"],
    extends: [tseslint.configs.disableTypeChecked],
  },
  {
    ignores: ["*.json"],
  },
  {
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "@stylistic/lines-between-class-members": [
        "error",
        {
          enforce: [
            { blankLine: "always", prev: "field", next: "method" },
            { blankLine: "always", prev: "method", next: "method" },
            { blankLine: "never", prev: "field", next: "field" },
          ],
        },
      ],
    },
  },
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
]);
