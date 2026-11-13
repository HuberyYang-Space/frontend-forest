import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    rules: {
      'no-console': 'off',
    },
  },
  {
    files: ['tests/*.test.mjs'],
    rules: {
      'test/no-import-node-test': 'off',
      'test/consistent-test-it': 'off',
    },
  },
)
