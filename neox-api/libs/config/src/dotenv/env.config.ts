import { registerAs } from '@nestjs/config';

export const dotenvConfig = registerAs('config', () => ({
  port: parseInt(process.env['APP_PORT']!, 10),
  nodenv: process.env['NODE_ENV'],
}));
