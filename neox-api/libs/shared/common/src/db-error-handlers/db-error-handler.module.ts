import { Module } from '@nestjs/common';
import { DbErrorHandler } from './db-error-handler.service';
import { DatabaseErrorsProvider } from './db-error-provider';

@Module({
  providers: [DbErrorHandler, DatabaseErrorsProvider],
  exports: [DbErrorHandler],
})
export class DbErrorHandlerModule {}
