// eslint-disable-next-line @nx/enforce-module-boundaries
import { configValidationSchema, databaseConfig } from '@neox-api/db';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { dotenvConfig } from './dotenv';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [dotenvConfig, databaseConfig],
      validate: (config) => {
        const result = configValidationSchema.safeParse(config);
        if (!result.success) {
          throw new Error(
            'configValidationSchema: ' + JSON.stringify(result, null, 2),
          );
        }

        return result.data;
      },
    }),
  ],
})
export class LocalConfigModule {}
