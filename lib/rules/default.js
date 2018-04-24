module.exports = {
  extends: [ 'semistandard' ],

  env: {
    es6: true,
    browser: true,
    commonjs: true,
    jquery: true
  },

  globals: {
    G: true
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 6
  },

  rules: {
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
