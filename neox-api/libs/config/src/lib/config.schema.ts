import * as Joi from '@hapi/joi';
import { APP_PORT, POSTGRES_PORT } from './ports.config';

export const configValidationSchema = Joi.object({
  NODE_ENV: Joi.string().valid(
    'development',
    'production',
    'test',
    'provision',
  ),
  PORT: Joi.number().default(APP_PORT),
  //STAGE: Joi.string().required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(POSTGRES_PORT).required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_DATABASE: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
});
