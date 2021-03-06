module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
      'react/jsx-filename-extension': [1, { 'extensions': ['.tsx'] }],
      'import/extensions': ['error', 'ignorePackages', {
          'js': 'never',
          'ts': 'never',
          'tsx': 'never',
      }]
  },
    settings: {
        'import/extensions': ['.js', '.ts', '.tsx'],
        'import/resolver': {
            typescript: {},
            node: {
                extensions: ['.js', '.ts', '.tsx', '.d.ts'],
            },
        },
    },
};
