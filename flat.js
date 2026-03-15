const flatConfig = require('./flat/default');

const config = flatConfig;

config.configs = {
  default: flatConfig,
  react: require('./flat/react'),
  dsp: require('./flat/dsp'),
};

module.exports = config;
