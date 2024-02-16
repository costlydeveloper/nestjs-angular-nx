import { z } from 'zod';

export const TokensSchema = z.object({
  accessToken: z.string().min(1),
  refreshToken: z.string().min(1),
});

export type Tokens = z.infer<typeof TokensSchema>;
