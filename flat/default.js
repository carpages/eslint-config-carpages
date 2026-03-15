const { defineConfig } = require('eslint/config');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = defineConfig([
  eslintPluginPrettierRecommended,
  {
    rules: {
      'prettier/prettier': [
        'error',
        { singleQuote: true, jsxSingleQuote: true, printWidth: 100, jsxBracketSameLine: false },
      ],
      semi: ['error', 'always'],
    },
  },
  {
    languageOptions: {
      globals: {
        G: true,
      },
    },
  },
]);
