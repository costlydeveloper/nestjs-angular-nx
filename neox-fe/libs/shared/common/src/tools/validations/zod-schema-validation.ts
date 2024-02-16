import { catchError, map, pipe, throwError } from 'rxjs';
import { ZodSchema } from 'zod';

export function validateSchema<T>(schema: ZodSchema<T>, input: unknown): T {
  try {
    const validatedData = schema.parse(input);
    console.log('Validation successful', validatedData);
    return validatedData;
  } catch (error) {
    console.error('Validation failed', error);
    throw error;
  }
}

// RxJS operator for validation
export function validateWithSchema<T>(schema: ZodSchema<T>) {
  return pipe(
    map((data: unknown) => schema.parse(data)),
    catchError((error) =>
      throwError(() => new Error(`Validation failed: ${error.message}`))
    )
  );
}
