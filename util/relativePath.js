const { join } = require('path');

function relativeTo(path) {
  return (...args) => join(path, ...args);
}

module.exports = { relativeTo, to: relativeTo };
