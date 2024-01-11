import { POSTGRES_PORT } from '@neox-api/config';
import { ExposedEntities } from '@neox-api/endpoints';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: process.env['DB_HOST'] || 'localhost',
  port: process.env['DB_PORT']
    ? parseInt(process.env['DB_PORT'], 10)
    : POSTGRES_PORT,
  username: process.env['DB_USERNAME'],
  password: process.env['DB_PASSWORD'],
  database: process.env['DB_DATABASE'],
  entities: ExposedEntities,
});
