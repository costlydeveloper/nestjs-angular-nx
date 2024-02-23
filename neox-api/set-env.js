const fs = require('fs');
const path = require('path');
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

// Set the .env file path
const envFilePath = path.join(__dirname, `.env.${env}`);
const targetEnvFilePath = path.join(__dirname, '.env');

try {
  // Copy the appropriate .env file
  fs.copyFileSync(envFilePath, targetEnvFilePath);
  console.log(`Copied ${envFilePath} to ${targetEnvFilePath}`);
} catch (error) {
  console.error('Error setting up the environment:', error);
}
