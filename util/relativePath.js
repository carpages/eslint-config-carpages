const joinPath = require( 'path' ).join;

const relativeTo = path => {
  return function() {
    return joinPath( path, ...arguments );
  };
};

module.exports = {
  to: relativeTo
};
