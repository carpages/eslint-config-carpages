const eslint = require( 'eslint' );
const test = require( 'ava' );

const { relativeTo } = require( '../util/relativePath' );
const relativeToDirname = relativeTo( __dirname );
const upOneDir = relativeTo( relativeToDirname( '..' ));
const rules = relativeTo( upOneDir( 'rules' ));
const fixtures = relativeTo( relativeToDirname( 'fixtures' ));

const defaultLinter = new eslint.CLIEngine({
  useEslintrc: false,
  configFile: rules( 'default.js' ),
  ignore: false
});

test( 'test default linting config', t => {
  t.plan( 1 );

  const parenSpacing = defaultLinter.executeOnFiles([ fixtures( 'default/parenSpacing.js' ) ]);

  t.is( parenSpacing.results[0].messages[0].message, 'There must be a space after this paren.' );
});
