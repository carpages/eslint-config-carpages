module.exports = {
  extends: [
    "prettier",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard"
  ],

  plugins: ["html", "prettier", "flowtype", "requirejs"],

  env: {
    browser: true,
    node: true,
    jquery: true
  },

  globals: {
    G: true
  },

  parser: "babel-eslint",

  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      impliedStrict: true,
      classes: true
    }
  },

  rules: {
    semi: ["error", "always"],

    "object-curly-spacing": [
      "error",
      "always",
      {
        objectsInObjects: false,
        arraysInObjects: false
      }
    ],

    "array-bracket-spacing": [
      "error",
      "always",
      {
        arraysInArrays: false,
        objectsInArrays: false
      }
    ],

    "space-in-parens": [
      "error",
      "always",
      {
        exceptions: ["{}", "()", "[]", "empty"]
      }
    ],

    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never"
      }
    ],

    "no-multi-spaces": [
      "error",
      {
        exceptions: {
          VariableDeclarator: true,
          ImportDeclaration: true
        }
      }
    ],

    quotes: [
      2,
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ]
  }
};
