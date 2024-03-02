import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      //cypressDir: "src",
      bundler: 'vite',
      /* webServerCommands: {
        default: "nx run my-project:serve",
        production: "nx run my-project:preview",
      },
      ciWebServerCommand: "nx run my-project:serve-static",*/
    }),
    baseUrl: 'http://localhost:4200',
  },

  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts',
  },
});
