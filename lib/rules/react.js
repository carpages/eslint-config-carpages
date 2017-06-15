const path = require( 'path' );

module.exports = {
  plugins: [ 'react' ],

  extends: [ path.join( __dirname, 'default.js' ), 'plugin:react/recommended' ],

  globals: {
    React: true
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
};
