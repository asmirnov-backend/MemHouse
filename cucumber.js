module.exports = {
  default: {
    paths: ['test/features/**/*.feature'],
    format: ['progress-bar', 'html:cucumber-report.html'],
    publish: false,
    publishQuiet: true,
    require: ['test/features/step-definitions/**/*.ts'],
    requireModule: ['ts-node/register'],
  },
};
