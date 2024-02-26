import { z } from 'zod';
import { baseSchema } from '../../../base';
import { personVmSchema } from '../../person';

export const userVmSchema = baseSchema
  .extend({
    email: z.string().email(),
    person: personVmSchema,
  })
  .strict();
export type UserVmSchemaType = z.infer<typeof userVmSchema>;
