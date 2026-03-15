const { defineConfig } = require('eslint/config');
const requirejsEslintPlugin = require('eslint-plugin-requirejs');
const globals = require('globals');

module.exports = defineConfig([
  require('./default'),
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
