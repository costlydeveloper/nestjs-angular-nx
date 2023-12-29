import { IEnvironmentGlobal } from '../environment.interface';

export const environmentGlobal: IEnvironmentGlobal = {
  production: true,
  database: {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'neox-db',
    autoloadEntities: true,
  },
  /*database: {
	  type: 'mysql',
	  host: '127.0.0.1',
	  port: 3306,
	  username: 'root',
	  password: '3007',
	  database: 'main_db',
	},*/
};
