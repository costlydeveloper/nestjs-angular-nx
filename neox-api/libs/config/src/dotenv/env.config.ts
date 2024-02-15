import { registerAs } from '@nestjs/config';
import { APP_PORT } from '../app';

export default registerAs('config', () => ({
  port: parseInt(process.env['PORT']!, 10) || APP_PORT,
  nodenv: process.env['NODE_ENV'],
}));
