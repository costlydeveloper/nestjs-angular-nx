import 'dotenv/config';

console.log(process.env.DATABASE_HOST);
export const APP_CONFIG = {
  APP_PORT: 3000,
};

interface INestConfiguration {
  database: IDatabaseConfig;
}

export interface IDatabaseConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  mainDbName: string;
}

export const NEST_CONFIGURATION = (): INestConfiguration => ({
  database: {
    host: process.env.DATABASE_HOST!,
    port: +process.env.DATABASE_PORT!,
    username: process.env.DATABASE_USER!,
    password: process.env.DATABASE_PASS!,
    mainDbName: process.env.DATABASE_NAME!,
  },
});
