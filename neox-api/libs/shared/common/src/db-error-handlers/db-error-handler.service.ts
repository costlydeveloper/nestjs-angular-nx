import { Inject, Injectable } from '@nestjs/common';
import { IDbError } from './types/type.interface';

@Injectable()
export class DbErrorHandler {
  constructor(
    @Inject('DATABASE_ERRORS')
    public readonly codes: IDbError,
  ) {}
}
