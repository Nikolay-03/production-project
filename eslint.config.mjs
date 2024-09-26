import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
    {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
    {languageOptions: {globals: globals.browser}},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        extends: [
            "plugin:i18next/recommended",
        ]
    },
    {
        plugins: [
            "i18next",
        ]
    },
    {
        rules: {
            'no-unused-vars': 'warn',
            "react/react-in-jsx-scope": "off",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/ban-ts-comment": "warn",
            "i18next/no-literal-string": ['error', {markupOnly: true}],
        }
    }
];