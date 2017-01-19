const eslint = require( 'eslint' );
const test = require( 'ava' );
const path = require( 'path' );

const defaultLinter = new eslint.CLIEngine({
  configFile: path.join( __dirname, '..', '.eslintrc.json' )
});

const reactLinter = new eslint.CLIEngine({
  configFile: path.join( __dirname, '..', 'lib/react', '.eslintrc.json' )
});

test( 'test default linting config', t => {
  t.plan( 1 );
  const result = defaultLinter.executeOnFiles([ path.join( __dirname, 'fixtures/default.js' ) ]);
  t.is( result.results[0].messages[0].message, 'There must be a space inside this paren.' );
});

test( 'test react linting config', t => {
  t.plan( 1 );
  const result = reactLinter.executeOnFiles([ path.join( __dirname, 'fixtures/react.js' ) ]);
  t.is( result.results[0].messages[0].message, 'Missing semicolon.' );
});
