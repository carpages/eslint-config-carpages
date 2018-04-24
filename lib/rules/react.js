module.exports = {
  extends: [ './default.js', 'plugin:react/recommended' ],
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
