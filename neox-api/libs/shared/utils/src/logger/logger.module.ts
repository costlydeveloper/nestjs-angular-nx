import { Module } from '@nestjs/common';
import { LoggerModule as PinoLogger } from 'nestjs-pino';

@Module({
  imports: [
    PinoLogger.forRoot({
      forRoutes: ['*'], // Dodaj ovu opciju kako bi omogućio samo za određene rute
      pinoHttp: {
        customProps: () => ({
          context: 'HTTP',
        }),
        autoLogging: true,
        transport: {
          target: 'pino-pretty',
          //target: transportPath,
          //target: `${__dirname}/../../../pino-pretty-transport.js`,
          //target: `${__dirname}/../../../../../pino-pretty-transport.js`,
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
