const { relativeTo } = require( '../util/relativePath' );
const relativeToDirname = relativeTo( __dirname );

module.exports = {
  extends: [ relativeToDirname( 'default.js' ), 'plugin:flowtype/recommended' ],
  plugins: [ 'flowtype' ]
};
