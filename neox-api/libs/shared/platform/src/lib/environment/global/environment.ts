import { IEnvironmentGlobal } from '../environment.interface';

export const environmentGlobal: IEnvironmentGlobal = {
  production: false,
  database: {
    type: 'postgres',
    autoloadEntities: true,
  },
};
