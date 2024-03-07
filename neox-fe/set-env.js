/**
 * Environment Setup Script
 * This Node.js script automates the environment setup for a Node.js application by managing environment variables and Docker entrypoint configurations based on the specified environment (production, test, or development).
 *
 * Usage:
 * node set-env.js [environment]
 *
 * The script expects a command line argument specifying the environment (production, test, or development). It then proceeds to set up the environment by:
 * 1. Validating the provided environment against a list of allowed environments.
 * 2. Copying the corresponding .env file (e.g., .env.production) to the root .env file used by the application.
 * 3. Copying the corresponding Docker entrypoint script (e.g., docker-entrypoint.production.sh) to the generic docker-entrypoint.sh file used to initialize the Docker container.
 *
 * Errors are reported to the console, and the script exits with an error code if the specified environment is not valid or if any file operations fail. This ensures that the application configuration always matches the specified environment, facilitating smooth deployment across different stages of development.
 */

const fs = require('fs');
const path = require('path');

// Allowed values for NODE_ENV
const allowedEnvs = ['production', 'test', 'development'];

// Getting the environment argument
const env = process.argv[2];

// Checking if the argument exists among allowed values
if (!allowedEnvs.includes(env)) {
  console.error(
    `Error: '${env}' is not a valid environment. Use one of the following: ${allowedEnvs.join(', ')}.`,
  );
  process.exit(1);
}

// Set the .env file path
const envFilePath = path.join(__dirname, `.env.${env}`);
const targetEnvFilePath = path.join(__dirname, '.env');
// Set the docker entrypoint file path
const dockerEntrypointFilePath = path.join(
  __dirname,
  `docker-entrypoint.${env}.sh`,
);
const targetDockerEntrypointFilePath = path.join(
  __dirname,
  'docker-entrypoint.sh',
);

try {
  // Copy the appropriate .env file
  fs.copyFileSync(envFilePath, targetEnvFilePath);
  fs.copyFileSync(dockerEntrypointFilePath, targetDockerEntrypointFilePath);
  console.log(`Copied ${envFilePath} to ${targetEnvFilePath}`);
  console.log(
    `Copied ${dockerEntrypointFilePath} to ${targetDockerEntrypointFilePath}`,
  );
} catch (error) {
  console.error('Error setting up the environment:', error);
}
