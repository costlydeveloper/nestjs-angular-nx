// eslint-disable-next-line @nx/enforce-module-boundaries
import { AppModule } from '@neox-api/app';
import { CreateUserDto, userVmSchema } from '@neox-api/endpoints';
import { TypeormHelperModule, TypeormService } from '@neox-api/helper-db';

import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Test, TestingModule } from '@nestjs/testing';
import { loggerPlugin } from '../../support/helper';
import request = require('supertest');

describe('Auth (e2e) ', () => {
  let app: NestFastifyApplication;
  let typeormService: TypeormService;
  const createUserDto: CreateUserDto = {
    email: 'test@example.com',
    password: 'testPassword',
  };

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule, TypeormHelperModule],
    }).compile();
    typeormService = moduleRef.get(TypeormService);
    app = moduleRef.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );

    await app.init();
    await app.getHttpAdapter().getInstance().register(loggerPlugin);
    await app.getHttpAdapter().getInstance().ready();
    await typeormService.cleanDatabase();
  });

  afterAll(async () => {
    await typeormService.cleanDatabase();
    await app.close();
  });

  describe('Signup', () => {
    it('should register a user', async () => {
      const response = await request(app.getHttpServer())
        .post('/auth/signup')
        .send(createUserDto)
        .expect(201);

      expect(response.body.accessToken).toBeDefined();
    });
  });

  describe('Signin', () => {
    it('should sign in a user', async () => {
      await request(app.getHttpServer())
        .post('/auth/signin')
        .send(createUserDto)
        .expect(200)
        .then((response) => {
          expect(response.body.accessToken).toBeDefined();
        });
    });
  });

  describe('Logout', () => {
    let accessToken: string;
    let refreshToken: string;

    beforeAll(async () => {
      const response = await request(app.getHttpServer())
        .post('/auth/signin')
        .send(createUserDto);
      accessToken = response.body.accessToken;
      refreshToken = response.body.refreshToken;
    });
    afterAll(async () => {
      await typeormService.cleanDatabase();
    });

    it('should log out a user', async () => {
      await request(app.getHttpServer())
        .post('/auth/logout')
        .set('Authorization', `Bearer ${accessToken}`)
        .expect(200);
    });
    it('should deny access with the refresh token after logout', async () => {
      await request(app.getHttpServer())
        .post('/auth/refresh')
        .send({ refreshToken })
        .expect(401)
        .then((response) => {
          expect(response.body.message).toEqual('Unauthorized');
          expect(response.body.statusCode).toEqual(401);
        });
    });
  });

  describe('Refresh Token', () => {
    let refreshToken: string;

    beforeAll(async () => {
      const signupResponse = await request(app.getHttpServer())
        .post('/auth/signup')
        .send(createUserDto)
        .expect(201);
      refreshToken = signupResponse.body.refreshToken;
    });

    afterAll(async () => {
      await typeormService.cleanDatabase();
    });

    it('should refresh tokens', async () => {
      await request(app.getHttpServer())
        .post('/auth/refresh')
        .set('Authorization', `Bearer ${refreshToken}`)
        .expect(200)
        .then((response) => {
          expect(response.body.accessToken).toBeDefined();
        });
    });
  });

  describe('Who Am I', () => {
    let accessToken: string;

    beforeAll(async () => {
      const signupResponse = await request(app.getHttpServer())
        .post('/auth/signup')
        .send(createUserDto)
        .expect(201);

      accessToken = signupResponse.body.accessToken;
    });

    afterAll(async () => {
      await typeormService.cleanDatabase();
    });

    it('should return the current user', async () => {
      const { body } = await request(app.getHttpServer())
        .get('/auth/whoami')
        .set('Authorization', `Bearer ${accessToken}`)
        .expect(200);

      const parseResult: any = userVmSchema.safeParse(body);
      if (!parseResult.success) {
        console.error(parseResult.error.issues);
      }
      expect(parseResult.success).toBeTruthy();
    });
  });
});
