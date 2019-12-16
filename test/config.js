const relativePath = require( '../util/relativePath' );
const relativeToDirname = relativePath.to( __dirname );
const upOneDir = relativePath.to( relativeToDirname( '..' ));
const rules = relativePath.to( upOneDir( 'rules' ));
const fixtures = relativePath.to( relativeToDirname( 'fixtures' ));

module.exports = {
  rules,
  fixtures
};
