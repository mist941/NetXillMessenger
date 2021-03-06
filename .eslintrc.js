module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  'env': {
    'browser': true,
    'es6': true,
    parserOptions: {
      ecmaVersion: 2019,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'rules': {}
};