const { defineConfig } = require('eslint/config');
const react = require('eslint-plugin-react');

const defaultConfig = require('./default');
const globals = require('globals');

module.exports = defineConfig([
  ...defaultConfig,
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
  },
  react.configs.flat['jsx-runtime'],
]);
