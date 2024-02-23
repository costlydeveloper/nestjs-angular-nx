// eslint-disable-next-line @nx/enforce-module-boundaries
import { AppModule } from '@neox-api/app';
import { UsersService } from '@neox-api/endpoints';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Test, TestingModule } from '@nestjs/testing';

describe('User Resource (integration)', () => {
  let app: NestFastifyApplication;
  let userService: UsersService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    userService = moduleRef.get(UsersService);
    app = moduleRef.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );

    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  afterEach(async () => {
    await app.close();
  });

  describe('Create User', () => {
    let userId: string;
    it('should create user', async () => {
      const user = await userService.create({
        email: 'john@skynet.com1',
        password: 'mystrongpassword',
      });
    });
  });
});
