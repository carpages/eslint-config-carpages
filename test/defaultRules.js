const eslint = require( 'eslint' );
const test = require( 'ava' );

const relativePath = require( '../util/relativePath' );
const relativeToDirname = relativePath.to( __dirname );
const upOneDir = relativePath.to( relativeToDirname( '..' ));
const rules = relativePath.to( upOneDir( 'rules' ));
const fixtures = relativePath.to( relativeToDirname( 'fixtures' ));

const defaultLinter = new eslint.CLIEngine({
  useEslintrc: false,
  configFile: rules( 'default.js' ),
  ignore: false
});

test( 'test default linting config', t => {
  t.plan( 1 );

  const parenSpacing = defaultLinter.executeOnFiles([
    fixtures( 'default/parenSpacing.js' )
  ]);

  t.is(
    parenSpacing.results[0].messages[0].message,
    'There must be a space inside this paren.'
  );
});
