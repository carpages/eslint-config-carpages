const defaultConfig = {
  extends: ['plugin:prettier/recommended'],

  env: {
    es6: true,
    browser: true,
    commonjs: true,
    node: true,
    jquery: true,
    amd: true,
  },

  globals: {
    G: true,
  },

  parser: '@babel/eslint-parser',

  parserOptions: {},

  rules: {
    'prettier/prettier': [
      'error',
      { singleQuote: true, jsxSingleQuote: true, printWidth: 100, jsxBracketSameLine: false },
    ],
    semi: ['error', 'always'],
  },
};

defaultConfig.configs = {
  default: defaultConfig,
  dsp: require('./dsp'),
  react: require('./react'),
};

module.exports = defaultConfig;
