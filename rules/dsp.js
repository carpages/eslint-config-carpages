const relativePath = require('../util/relativePath');
const relativeToDirname = relativePath.to(__dirname);

module.exports = {
  extends: [relativeToDirname('default.js')],
  plugins: ['requirejs'],

  env: {
    amd: true,
  },
};
