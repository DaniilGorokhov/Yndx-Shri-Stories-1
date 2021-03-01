module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-scss',
  ],
  rules: {
    'indentation': 4,
    'custom-property-empty-line-before': null,
    'at-rule-empty-line-before': null,
    'max-empty-lines': 2,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
};
