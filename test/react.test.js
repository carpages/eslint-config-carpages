const { ESLint } = require('eslint');
const test = require('ava');
const { rules, fixtures } = require('./config');

const reactLinter = new ESLint({
  useEslintrc: false,
  overrideConfigFile: rules('react.js'),
  ignore: false,
});

test('test react linting config', async (t) => {
  t.plan(1);

  const missingSemicolon = await reactLinter.lintFiles([fixtures('react/jsxCurlyBraces.js')]);
  t.is(missingSemicolon[0].errorCount, 0);
});
