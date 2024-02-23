// eslint-disable-next-line @nx/enforce-module-boundaries
import { AppModule } from '@neox-api/app';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Test, TestingModule } from '@nestjs/testing';
import { loggerPlugin } from '../helper';
import request = require('supertest');

describe('Auth (e2e) ', () => {
  let app: NestFastifyApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );

    await app.init();
    await app.getHttpAdapter().getInstance().register(loggerPlugin);
    await app.getHttpAdapter().getInstance().ready();
  });

  afterEach(async () => {
    await app.close();
  });

  it('should register a user and fetch users list', async () => {
    const signupResponse = await request(app.getHttpServer())
      .post('/auth/signup')
      .send({ email: 'test3@examplead.com', password: 'testPassword' })
      .expect(201);

    const { accessToken } = signupResponse.body;

    expect(accessToken).toBeDefined();

    await request(app.getHttpServer())
      .get('/users')
      .set('Authorization', `Bearer ${accessToken}`)
      .expect(200)
      .then((response) => {
        expect(Array.isArray(response.body)).toBeTruthy();
      });
  });
});
