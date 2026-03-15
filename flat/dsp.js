const { defineConfig } = require('eslint/config');
const requirejsEslintPlugin = require('eslint-plugin-requirejs');
const globals = require('globals');

const defaultConfig = require('./default');

module.exports = defineConfig([
  ...defaultConfig,
  {
    plugins: {
      requirejs: requirejsEslintPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.amd,
      },
    },
  },
]);
