module.exports = {
  extends: [ 'standard' ],

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
    semi: [ 'error', 'always' ],

    'object-curly-spacing': [
      'error',
      'always',
      {
        objectsInObjects: false,
        arraysInObjects: false
      }
    ],

    'array-bracket-spacing': [
      'error',
      'always',
      {
        arraysInArrays: false,
        objectsInArrays: false
      }
    ],

    'space-in-parens': [
      'error',
      'always',
      {
        exceptions: [ '{}', '()', '[]', 'empty' ]
      }
    ],

    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never'
      }
    ],

    'no-multi-spaces': [
      'error',
      {
        exceptions: {
          VariableDeclarator: true,
          ImportDeclaration: true
        }
      }
    ]
  }
};