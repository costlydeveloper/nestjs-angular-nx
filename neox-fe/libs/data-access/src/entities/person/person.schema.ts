import { z } from 'zod';
import { BaseSchema } from '../../base';

export const PersonSchema = BaseSchema.extend({
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
});

export type PersonType = z.infer<typeof PersonSchema>;
