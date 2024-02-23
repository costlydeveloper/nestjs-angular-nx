// eslint-disable-next-line @nx/enforce-module-boundaries
import { AppModule } from '@neox-api/app';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Test, TestingModule } from '@nestjs/testing';

describe('User Resource (integration)', () => {
  let app: NestFastifyApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );

    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  afterEach(async () => {
    await app.close();
  });

  describe('Create User', () => {
    it('should create user', async () => {
      const user = await prisma.user.create({
        data: {
          email: 'john@skynet.com',
          firstName: 'John',
          lastName: 'Connor',
        },
      });
      userId = user.id;
    });
  });
});
