const { withModuleFederation } = require('@nx/angular/module-federation');
const config = require('neox-ui/apps/team-link/module-federation.config');
module.exports = withModuleFederation(config);
