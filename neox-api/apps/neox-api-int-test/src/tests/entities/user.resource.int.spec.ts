// eslint-disable-next-line @nx/enforce-module-boundaries
import { AppModule } from '@neox-api/app';
import { TypeormModule, TypeormService } from '@neox-api/db';
import {
  CreateUserDto,
  IPerson,
  IUserOmitHash,
  PersonService,
  UsersService,
} from '@neox-api/endpoints';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Test, TestingModule } from '@nestjs/testing';

describe('User Resource (integration)', () => {
  let app: NestFastifyApplication;
  let typeormService: TypeormService;
  let userService: UsersService;
  let personService: PersonService;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule, TypeormModule],
    }).compile();
    typeormService = moduleRef.get(TypeormService);
    userService = moduleRef.get(UsersService);
    personService = moduleRef.get(PersonService);
    app = moduleRef.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );

    await app.init();
    await app.getHttpAdapter().getInstance().ready();
    await typeormService.cleanDatabase();
  });

  afterAll(async () => {
    await typeormService.cleanDatabase();
    await app.close();
  });

  describe('Create User', () => {
    const dto: CreateUserDto = {
      email: 'john@skynet.com',
      password: 'mystrongpassword',
    };
    let user: IUserOmitHash;
    it('should successfully create a new user with email validation and without exposing sensitive properties', async () => {
      user = await userService.create(dto);
      expect(user.email).toBe(dto.email);
      expect(user).not.toHaveProperty('hash');
      expect(user).not.toHaveProperty('hashedRt');
    });
    it('should successfully find and validate the created person associated with the new user', async () => {
      const person: IPerson = await personService.findById(user.person.id);
      expect(person).toBeDefined();
      expect(person.id).toBe(user.person.id);
    });
  });
});
