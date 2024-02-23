// eslint-disable-next-line @nx/enforce-module-boundaries
import { ExposedEntities } from '@neox-api/endpoints';
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  public appDataSource: DataSource;
  constructor(private configService: ConfigService) {
    this.appDataSource = new DataSource({
      ...this.configService.get<DataSourceOptions>('database'),
      entities: ExposedEntities,
    } as DataSourceOptions);
  }
  async onModuleInit() {
    await this.appDataSource.initialize();
    console.log('DataSource has been initialized!');
  }

  async onModuleDestroy() {
    await this.appDataSource.destroy();
    console.log('DataSource has been destroyed!');
  }

  async cleanDatabase() {
    if (process.env['NODE_ENV'] === 'production') {
      console.warn('Database cleaning is skipped in production!');
      return;
    }

    const queryRunner = this.appDataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      for (const entity of this.appDataSource.entityMetadatas) {
        await queryRunner.query(
          `TRUNCATE TABLE "${entity.tableName}" CASCADE;`,
        );
      }
      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new Error(`ERROR: Cleaning test db: ${error}`);
    } finally {
      await queryRunner.release();
    }
  }
}
