const eslint = require( 'eslint' );
const test = require( 'ava' );
const path = require( 'path' );

const reactLinter = new eslint.CLIEngine({
  useEslintrc: false,
  configFile: path.join( __dirname, '..', 'lib/rules/react.js' )
});

test( 'test react linting config', t => {
  t.plan( 1 );

  const missingSemicolon = reactLinter.executeOnFiles([
    path.join( __dirname, 'fixtures/react/missingSemicolon.js' )
  ]);

  t.is( missingSemicolon.results[0].messages[0].message, 'Missing semicolon.' );
});
