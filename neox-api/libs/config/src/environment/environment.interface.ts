import { DatabaseType } from 'typeorm';

export interface IEnvironment {
  production: boolean;
  database: {
    type: DatabaseType;
    autoloadEntities: boolean;
  };
}
