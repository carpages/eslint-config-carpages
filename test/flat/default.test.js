const { ESLint } = require('eslint');
const path = require('path');
const test = require('ava');

const defaultLinter = new ESLint({
  overrideConfigFile: path.resolve(__dirname, '../../flat/default.js'),
  ignore: false,
});

test('test default linting config', async (t) => {
  t.plan(1);

  const parenSpacing = await defaultLinter.lintFiles([
    path.resolve(__dirname, '../fixtures/default/addSemicolon.js'),
  ]);
  t.truthy(parenSpacing[0].messages.some((m) => m.message === 'Missing semicolon.'));
});
