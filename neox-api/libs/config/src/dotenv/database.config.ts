import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  type: 'postgres',
  host: process.env['DB_HOST'] || 'localhost',
  port: parseInt(process.env['DB_PORT']!, 10),
  username: process.env['DB_USERNAME'],
  password: process.env['DB_PASSWORD'],
  database: process.env['DB_DATABASE'],
  synchronize: process.env['NODE_ENV'] !== 'production',
  logging: false, //process.env['NODE_ENV'] === 'development',
  dropSchema: process.env['NODE_ENV'] === 'test',
}));
