const { execSync } = require('child_process');

// Allowed values for NODE_ENV
const allowedEnvs = ['production', 'test', 'staging', 'development'];

// Getting the environment argument
const env = process.argv[2];

// Checking if the argument exists among allowed values
if (!allowedEnvs.includes(env)) {
  console.error(
    `Error: '${env}' is not a valid environment. Use one of the following: ${allowedEnvs.join(', ')}.`,
  );
  process.exit(1);
}

try {
  // Docker commands to stop and start containers
  execSync(`docker-compose -f docker-compose.${env}.yml down`, {
    stdio: 'inherit',
  });

  execSync(`docker-compose -f docker-compose.${env}.yml up --build `, {
    stdio: 'inherit',
  });
} catch (error) {
  console.error("'Error setting up the Docker environment:", error);
}
