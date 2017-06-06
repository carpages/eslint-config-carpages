const eslint = require( 'eslint' );
const test = require( 'ava' );
const path = require( 'path' );

const defaultLinter = new eslint.CLIEngine({
  useEslintrc: false,
  configFile: path.join( __dirname, '..', 'lib/rules/default.js' )
});

test( 'test default linting config', t => {
  t.plan( 1 );

  const parenSpacing = defaultLinter.executeOnFiles([
    path.join( __dirname, 'fixtures/default/parenSpacing.js' )
  ]);

  t.is(
    parenSpacing.results[0].messages[0].message,
    'There must be a space inside this paren.'
  );
});
