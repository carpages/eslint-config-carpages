module.exports = {
  extends: ['./default.js'],
  plugins: ['react'],

  settings: {
    react: {
      version: 'detect',
    },
  },

  globals: {
    React: true,
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
