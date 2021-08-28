module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
    es6: true,
  },
  extends: 'airbnb-typescript-prettier',
  rules: {
    /* Check this rules */
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    /* Check this rules */
    '@typescript-eslint/no-empty-function': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'react/jsx-props-no-spreading': 'off',
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    'no-console': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    '@typescript-eslint/explicit-function-return-type': 'warn',
    'no-empty': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
        paths: ['src'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
