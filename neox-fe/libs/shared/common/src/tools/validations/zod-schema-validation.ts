import { catchError, map, pipe, throwError } from 'rxjs';
import { z, ZodSchema } from 'zod';
import { MESSAGE } from '../../constants';

export function validateWithSchema<T>(schema: ZodSchema<T>) {
  return pipe(
    map((data: unknown) => schema.parse(data)),
    catchError((error) =>
      throwError(
        () => new Error(`${MESSAGE.ERROR.VALIDATION_FAILED}: ${error.message}`)
      )
    )
  );
}

export function validateListWithSchema<T>(itemSchema: ZodSchema<T>) {
  const listSchema = z.array(itemSchema);

  return pipe(
    map((data: unknown) => listSchema.parse(data)),
    catchError((error) =>
      throwError(
        () => new Error(`${MESSAGE.ERROR.VALIDATION_FAILED}: ${error.message}`)
      )
    )
  );
}
