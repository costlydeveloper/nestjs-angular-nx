import * as Joi from '@hapi/joi';
import { APP_PORT } from '../app';

export const configValidationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test', 'staging'),
  STAGE: Joi.string().valid('development', 'production', 'test', 'staging'),
  PORT: Joi.number().default(APP_PORT),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_DATABASE: Joi.string().required(),
  AT_SECRET: Joi.string().required(),
  RT_SECRET: Joi.string().required(),
});
