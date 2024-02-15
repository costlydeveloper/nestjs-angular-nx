import { NestFastifyApplication } from '@nestjs/platform-fastify';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';

export function swaggerConfig(app: NestFastifyApplication, port: string): any {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Neox API')
    .setDescription('The API description')
    .setVersion('1.0')
    .addServer(`http://localhost:${port}/`, 'Local environment')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Input your JWT token',
        name: 'Authorization',
        in: 'header',
      },
      'bearer',
    )
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };

  const document = SwaggerModule.createDocument(app, swaggerConfig, options);

  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      security: [{ bearer: [] }],
      persistAuthorization: true,
    },
  });
}
