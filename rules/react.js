const relativePath = require( '../util/relativePath' );
const relativeToDirname = relativePath.to( __dirname );

module.exports = {
  extends: [ relativeToDirname( 'default.js' ), 'standard-react' ],

  settings: {
    react: {
      version: 'detect'
    }
  },

  globals: {
    React: true
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
};
