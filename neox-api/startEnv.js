const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Get the environment argument (eg, 'development' or 'test')
const env = process.argv[2];

// Set the .env file path
const envFilePath = path.join(__dirname, `.env.${env}`);
const targetEnvFilePath = path.join(__dirname, '.env');

try {
  // Copy the appropriate .env file
  fs.copyFileSync(envFilePath, targetEnvFilePath);
  console.log(`Copied ${envFilePath} to ${targetEnvFilePath}`);
  console.log('env', env);
  execSync(`docker-compose -f docker-compose.${env}.yml down`, {
    stdio: 'inherit',
  });

  execSync(`docker-compose -f docker-compose.${env}.yml up -d`, {
    stdio: 'inherit',
  });
} catch (error) {
  console.error('Error setting up the environment:', error);
}
