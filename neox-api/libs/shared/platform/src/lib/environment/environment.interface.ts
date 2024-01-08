import { DatabaseType } from 'typeorm';

export interface IEnvironmentGlobal {
  production: boolean;
  database: {
    type: DatabaseType;
    autoloadEntities: boolean;
  };
}
