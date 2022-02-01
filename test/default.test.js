const { ESLint } = require('eslint');
const test = require('ava');
const { rules, fixtures } = require('./config');

const defaultLinter = new ESLint({
  useEslintrc: false,
  overrideConfigFile: rules('default.js'),
  ignore: false,
});

test('test default linting config', async (t) => {
  t.plan(1);

  const parenSpacing = await defaultLinter.lintFiles([fixtures('default/addSemicolon.js')]);
  t.truthy(parenSpacing[0].messages.some((m) => m.message === 'Missing semicolon.'));
});
