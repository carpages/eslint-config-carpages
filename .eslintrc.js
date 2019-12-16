const relativePath = require( './util/relativePath' );
const relativeToDirname = relativePath.to( __dirname );
const rules = relativePath.to( relativeToDirname( 'rules' ));

module.exports = {
  extends: rules( 'default.js' )
};
