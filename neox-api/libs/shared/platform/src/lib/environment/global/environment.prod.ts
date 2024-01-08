import { IEnvironmentGlobal } from '../environment.interface';

export const environmentGlobal: IEnvironmentGlobal = {
  production: true,
  database: {
    type: 'postgres',
    autoloadEntities: true,
  },
};
