const { defineConfig } = require('eslint/config');
const flatConfig = require('./flat');

module.exports = defineConfig([
  ...flatConfig,
  {
    ignores: ['**/test/fixtures*'],
  },
]);
