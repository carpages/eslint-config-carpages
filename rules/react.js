const { relativeTo } = require( '../util/relativePath' );
const relativeToDirname = relativeTo( __dirname );

module.exports = {
  extends: [ relativeToDirname( 'default.js' ), 'plugin:react/recommended' ],
  plugins: [ 'react' ],

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
