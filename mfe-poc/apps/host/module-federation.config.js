// @ts-check

/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'host',
  remotes: ['driver', 'vehicle', 'shift'],
};

module.exports = moduleFederationConfig;
