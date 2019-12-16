const test = require( 'ava' );
const eslint = require( 'eslint' );

const { relativeTo } = require( '../util/relativePath' );
const relativeToDirname = relativeTo( __dirname );
const upOneDir = relativeTo( relativeToDirname( '..' ));
const rules = relativeTo( upOneDir( 'rules' ));
const fixtures = relativeTo( relativeToDirname( 'fixtures' ));

const reactLinter = new eslint.CLIEngine({
  useEslintrc: false,
  configFile: rules( 'react.js' ),
  ignore: false
});

test( 'test react linting config', t => {
  t.plan( 1 );

  const missingSemicolon = reactLinter.executeOnFiles([ fixtures( 'react/missingSemicolon.js' ) ]);

  t.is( missingSemicolon.results[0].messages[0].message, 'Missing semicolon.' );
});
