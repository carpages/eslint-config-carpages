const { defineConfig } = require('eslint/config');
const react = require('eslint-plugin-react');
const globals = require('globals');

module.exports = defineConfig([
  require('./default'),
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
