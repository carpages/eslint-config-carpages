module.exports = {
  plugins: [ 'react' ],

  extends: [ './default.js', 'plugin:react/recommended' ],

  globals: {
    React: true
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
};
