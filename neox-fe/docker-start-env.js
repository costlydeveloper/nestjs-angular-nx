const { execSync } = require('child_process');
require('dotenv').config();
const fs = require('fs');

// Allowed values for NODE_ENV
const allowedEnvs = ['production', 'test', 'development'];

// Getting the environment argument
const env = process.argv[2];
let startScript = process.argv[3];

const composeFilePath = `docker-compose.${env}.yml`;

if (!fs.existsSync(composeFilePath)) {
  console.error(
    `Error: Docker compose file '${composeFilePath}' does not exist.`,
  );
  process.exit(1);
}

if (!startScript) {
  startScript = process.env.START_SCRIPT;
}

// Checking if the argument exists among allowed values
if (!allowedEnvs.includes(env)) {
  console.error(
    `Error: '${env}' is not a valid environment. Use one of the following: ${allowedEnvs.join(', ')}.`,
  );
  process.exit(1);
}

try {
  // Docker commands to stop and start containers
  execSync(`docker-compose -f ${composeFilePath} down`, {
    stdio: 'inherit',
  });

  execSync(`docker-compose -f ${composeFilePath} build --no-cache `, {
    stdio: 'inherit',
    env: { ...process.env, START_SCRIPT: startScript },
  });
  execSync(`docker-compose -f ${composeFilePath} up `, {
    stdio: 'inherit',
    env: { ...process.env, START_SCRIPT: startScript },
  });
} catch (error) {
  console.error("'Error setting up the Docker environment:", error);
}
