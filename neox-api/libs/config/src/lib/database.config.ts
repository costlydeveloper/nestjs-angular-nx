import { registerAs } from '@nestjs/config';
import { POSTGRES_PORT } from './ports.config';

export default registerAs('database', () => ({
  type: 'postgres',
  host: process.env['DB_HOST'] || 'localhost',
  port: parseInt(process.env['DB_PORT']!, 10) || POSTGRES_PORT,
  username: process.env['DB_USERNAME'],
  password: process.env['DB_PASSWORD'],
  database: process.env['DB_DATABASE'],
  synchronize: process.env['NODE_ENV'] === 'development',
  logging: process.env['NODE_ENV'] === 'development',
}));
