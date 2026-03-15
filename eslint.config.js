const { defineConfig } = require('eslint/config');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

const defaultConfig = require('./flat');

module.exports = defineConfig([
  ...defaultConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: ['**/test/fixtures*'],
  },
]);
