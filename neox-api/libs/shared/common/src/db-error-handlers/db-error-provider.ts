import { environment } from '@neox-api/config';
import { Provider } from '@nestjs/common';
import { MESSAGE } from '../constants';
import { mysqlErrors } from './types/mysql';
import { PostgresErrors } from './types/postgres';
import { IDbError } from './types/type.interface';

export const DatabaseErrorsProvider: Provider = {
  provide: 'DATABASE_ERRORS',
  useFactory: () => {
    let errorType: IDbError;

    switch (environment.database.type) {
      case 'mysql':
        errorType = mysqlErrors;
        break;
      case 'postgres':
        errorType = PostgresErrors;
        break;

      default:
        throw new Error(MESSAGE.ERROR.UNSUPPORTED_DATABASE_TYPE);
    }
    return errorType;
  },
};
