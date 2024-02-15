import { IEnvironment } from './environment.interface';

export const environment: IEnvironment = {
  production: true,
  database: {
    type: 'postgres',
    autoloadEntities: true,
  },
};
