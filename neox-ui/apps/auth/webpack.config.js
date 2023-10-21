const { withModuleFederation } = require('@nx/angular/module-federation');
const config = require('neox-ui/apps/auth/module-federation.config');
module.exports = withModuleFederation(config);
