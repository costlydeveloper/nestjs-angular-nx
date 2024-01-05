/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import fastifyHelmet from '@fastify/helmet';
import {
  ClassSerializerInterceptor,
  Logger,
  ValidationPipe,
} from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger as PinoLogger, LoggerErrorInterceptor } from 'nestjs-pino';

import { AppModule } from './app/app.module';

async function bootstrap() {
  //const logger = new Logger('22', 'aseasd');
  const port = 3000; // +configService.get('API_PORT')!;
  const globalPrefix = 'api';
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { bufferLogs: true },
  );

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.setGlobalPrefix(globalPrefix);
  app.useLogger(app.get(PinoLogger));
  app.useGlobalInterceptors(new LoggerErrorInterceptor());
  app.enableCors();

  // region *** Swagger ***

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Neox API')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('tag')
    .addServer('http://localhost:3000/', 'Local environment')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      description: 'Enter JWT token',
      in: 'header',
    })
    .build();

  /*  const options: SwaggerDocumentOptions = {
																	operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
																  };*/
  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true, // this
    },
  });
  // endregion

  await app.register(fastifyHelmet, {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [`'self'`],
        styleSrc: [`'self'`, `'unsafe-inline'`],
        imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
        scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
      },
    },
  });

  // const configService = app.get(EnvConfigService);

  await app.listen(port, '0.0.0.0').then(() => {
    Logger.log(
      `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
      'NestApplication',
    );
  });
}

bootstrap();

/*
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}


  // region *** Swagger ***

  const config = new DocumentBuilder()
    .setTitle(' example')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('api ---')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'access-token',
    )
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };
  const document = SwaggerModule.createDocument(app, config, options);

  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true, // this
    },
  });
  // endregion
*/
