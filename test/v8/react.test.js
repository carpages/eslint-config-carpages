const { ESLint } = require('eslint8');
const path = require('path');
const test = require('ava');

const reactLinter = new ESLint({
  useEslintrc: false,
  overrideConfigFile: path.resolve(__dirname, '../../react.js'),
  ignore: false,
});

test('test react linting config', async (t) => {
  t.plan(1);

  const missingSemicolon = await reactLinter.lintFiles([
    path.resolve(__dirname, '../fixtures/react/jsxCurlyBraces.js'),
  ]);
  t.is(missingSemicolon[0].errorCount, 0);
});
