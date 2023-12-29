import { DatabaseType } from 'typeorm';

export interface IEnvironmentGlobal {
  production: boolean;
  database: {
    type: DatabaseType;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    autoloadEntities: boolean;
  };
}
