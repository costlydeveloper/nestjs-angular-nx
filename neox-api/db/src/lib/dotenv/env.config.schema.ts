import { z } from 'zod';

const envs = ['development', 'production', 'test', 'staging'] as const;

export const configValidationSchema = z.object({
  NODE_ENV: z.enum(envs),
  STAGE: z.enum(envs),
  APP_PORT: z.string(),
  DB_HOST: z.string(),
  DB_PORT: z.string(),
  DB_USERNAME: z.string(),
  DB_PASSWORD: z.string(),
  DB_DATABASE: z.string(),
  AT_SECRET: z.string(),
  RT_SECRET: z.string(),
});
