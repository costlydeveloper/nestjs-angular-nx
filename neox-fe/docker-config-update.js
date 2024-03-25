const fs = require('fs');
const path = './libs/config/src/environment/environment-test.ts';
const apiHost = process.env.API_HOST || 'default_value';

let content = fs.readFileSync(path, 'utf8');
content = content.replace(/apiServer: '.*'/, `apiServer: '${apiHost}'`);
fs.writeFileSync(path, content);
