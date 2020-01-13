module.exports = {
  extends: ['standard', 'plugin:prettier/recommended', 'prettier/standard'],

  env: {
    es6: true,
    browser: true,
    commonjs: true,
    node: true,
    jquery: true,
    amd: true
  },

  globals: {
    G: true
  },

  parser: 'babel-eslint',

  parserOptions: {},

  rules: {
    'prettier/prettier': [
      'error',
      { singleQuote: true, jsxSingleQuote: true, printWidth: 100, jsxBracketSameLine: false }
    ],
    semi: ['error', 'always']
  }
};
