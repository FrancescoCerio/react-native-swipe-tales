module.exports = {
  root: true,
  extends: [
    '@react-native',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unused-imports', 'simple-import-sort', 'prettier'],
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'semi': [2, 'never'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'warn',
          { 'vars': 'all', 'varsIgnorePattern': '^_', 'args': 'after-used', 'argsIgnorePattern': '^_' },
        ],
        'prettier/prettier': 1,
        'react/jsx-sort-props': [
          'error',
          {
            callbacksLast: false,
            ignoreCase: true,
            noSortAlphabetically: false,
            reservedFirst: false,
            shorthandFirst: false,
            shorthandLast: false,
          },
        ],
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-extra-semi': 0,
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': [
          1,
          {
            groups: [
              ['react-native-get-random-values', 'react-native-url-polyfill/auto'],
              // [
              //   '^\\u0000', // Side effect imports.
              // ],
              [
                '^.+\\.s?css$', // Style imports.
                '^react', // `react` related packages come first.
                // Node.js builtins.
                '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
                '^@?\\w',
              ],
              ['^@core(\\/\\w)*', '^@utils(\\/\\w)*'],
              ['^@components(\\/\\w)*', '^@hooks(\\/\\w)*'],
              [
                '^\\.\\.(?!/?$)',
                '^\\.\\./?$', // Parent imports. Put `..` last.
                '^\\./(?=.*/)(?!/?$)',
                '^\\.(?!/?$)',
                '^\\./?$', // Other relative imports. Put same-folder imports and `.` last.
              ],
            ],
          },
        ],
      },
      settings: {
        'import/extensions': ['.ts', '.tsx'],
      },
    },
  ],
}
