import * as Joi from '@hapi/joi';
import { APP_PORT } from '../app';
import { POSTGRES_PORT } from '../database';

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
  AT_SECRET: Joi.string().required(),
  RT_SECRET: Joi.string().required(),
});
