module.exports = {
  singleQuote: true,
  semi: false,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 80,
  arrowParens: 'avoid',
  overrides: [
    {
      files: ['*.res', '*.resi'],
      options: {
        parser: 'reason',
      },
    },
  ],
}
