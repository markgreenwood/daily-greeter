const environments = {};

environments.staging = {
  httpPort: 3000,
  envName: 'staging'
};

environments.production = {
  httpPort: 3000,
  envName: 'production'
};

const selectedEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : 'staging';

const environmentToExport = typeof(environments[selectedEnvironment]) == 'object' ? environments[selectedEnvironment] : 'staging';

module.exports = environmentToExport;
