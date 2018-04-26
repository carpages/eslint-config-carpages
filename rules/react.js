const relativePath = require( '../util/relativePath' );
const relativeToDirname = relativePath.to( __dirname );

module.exports = {
  extends: [ relativeToDirname( 'default.js' ), 'plugin:react/recommended' ],
  plugins: [ 'react' ],

  globals: {
    React: true
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
};
