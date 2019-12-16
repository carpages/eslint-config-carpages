const eslint = require( 'eslint' );
const test = require( 'ava' );
const config = require( './config' );

const defaultLinter = new eslint.CLIEngine({
  useEslintrc: false,
  configFile: config.rules( 'default.js' ),
  ignore: false
});

test( 'test default linting config', t => {
  t.plan( 1 );

  const parenSpacing = defaultLinter.executeOnFiles([ config.fixtures( 'default/parenSpacing.js' ) ]);

  t.is( parenSpacing.results[0].messages[0].message, 'There must be a space after this paren.' );
});
