import { Module } from '@nestjs/common';
import { LoggerModule as PinoLogger } from 'nestjs-pino';

@Module({
  imports: [
    PinoLogger.forRoot({
      forRoutes: ['*'], // Add this option to enable only for certain routes * means all routes
      pinoHttp: {
        customProps: () => ({
          context: 'HTTP',
        }),
        autoLogging: true,
        transport: {
          target:
            process.env['NODE_ENV'] === 'test'
              ? 'pino-pretty'
              : `${__dirname}/../../../pino-pretty-transport.js`,
          options: {
            colorizeObjects: true,
            messageFormat: '{context}{msg} ',
            singleLine: true,
          },
        },
      },
    }),
  ],
})
export class LoggerModule {}
