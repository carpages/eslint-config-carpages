const eslint = require( 'eslint' );
const test = require( 'ava' );

const relativePath = require( '../util/relativePath' );
const relativeToDirname = relativePath.to( __dirname );
const upOneDir = relativePath.to( relativeToDirname( '..' ));
const rules = relativePath.to( upOneDir( 'rules' ));
const fixtures = relativePath.to( relativeToDirname( 'fixtures' ));

const reactLinter = new eslint.CLIEngine({
  useEslintrc: false,
  configFile: rules( 'react.js' ),
  ignore: false
});

test( 'test react linting config', t => {
  t.plan( 1 );

  const missingSemicolon = reactLinter.executeOnFiles([
    fixtures( 'react/missingSemicolon.js' )
  ]);

  t.is( missingSemicolon.results[0].messages[0].message, 'Missing semicolon.' );
});
