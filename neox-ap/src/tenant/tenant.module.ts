/*
import {
  BadRequestException,
  MiddlewareConsumer,
  Module,
  Scope,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { DataSource, getConnection } from 'typeorm';

export const TENANT_CONNECTION = 'TENANT_CONNECTION';

@Module({
  imports: [],
  providers: [
    {
      provide: TENANT_CONNECTION,
      inject: [REQUEST, DataSource],
      scope: Scope.REQUEST,
      useFactory: async (request, connection) => {
        const tenant: Tenant = await connection
          .getRepository(Tenant)
          .findOne({ where: { host: request.headers.host } });
        return getConnection(tenant.name);
      },
    },
  ],
  exports: [TENANT_CONNECTION],
})
export class TenantModule {
  constructor(private readonly connectDB: DataSource) {}

  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(async (req, res, next) => {
        const tenant: Tenant = await this.connectDB
          .getRepository(Tenant)
          .findOne({ where: { host: req.headers.host } });

        if (!tenant) {
          throw new BadRequestException(
            'Database Connection Error',
            'There is a Error with the Database!',
          );
        }

        try {
          getConnection(tenant.name);
          next();
        } catch (e) {
          const createdConnection: DataSource = await this.connectDB.connect({
            name: tenant.name,
            type: 'mysql',
            host: 'localhost',
            port: 3307,
            username: 'root',
            password: 'root',
            database: tenant.name,
            entities: [Book],
            synchronize: true,
          });

          if (createdConnection) {
            next();
          } else {
            throw new BadRequestException(
              'Database Connection Error',
              'There is a Error with the Database!',
            );
          }
        }
      })
      .forRoutes('*');
  }
}
*/
