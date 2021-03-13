const test = require('ava');
const eslint = require('eslint');
const config = require('./config');

const reactLinter = new eslint.CLIEngine({
  useEslintrc: false,
  configFile: config.rules('react.js'),
  ignore: false
});

test('test react linting config', t => {
  t.plan(1);

  const missingSemicolon = reactLinter.executeOnFiles([config.fixtures('react/jsxCurlyBraces.js')]);
  t.is(missingSemicolon.errorCount, 0);
});
