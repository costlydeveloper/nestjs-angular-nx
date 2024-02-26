import { z } from 'zod';
import { baseSchema } from '../../../base';

export const personVmSchema = baseSchema
  .extend({
    firstName: z.string().nullable(),
    lastName: z.string().nullable(),
  })
  .strict();

export type PersonSchemaType = z.infer<typeof personVmSchema>;
