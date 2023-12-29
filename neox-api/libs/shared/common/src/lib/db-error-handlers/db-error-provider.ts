import { environmentGlobal } from '@neox-api/platform';
import { Provider } from '@nestjs/common';
import { mysqlErrors } from './types/mysql';
import { PostgresErrors } from './types/postgres';
import { IDbError } from './types/type.interface';

export const DatabaseErrorsProvider: Provider = {
  provide: 'DATABASE_ERRORS',
  useFactory: () => {
    let errorType: IDbError;

    switch (environmentGlobal.database.type) {
      case 'mysql':
        errorType = mysqlErrors;
        break;
      case 'postgres':
        errorType = PostgresErrors;
        break;

      default:
        throw new Error('Nepodržan tip baze podataka');
    }
    return errorType;
  },
};
