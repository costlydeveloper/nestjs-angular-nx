import { IEnvironment } from './environment.interface';

export const environment: IEnvironment = {
  production: false,
  database: {
    type: 'postgres',
    autoloadEntities: true,
  },
};
