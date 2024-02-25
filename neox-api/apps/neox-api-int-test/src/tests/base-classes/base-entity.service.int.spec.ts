// eslint-disable-next-line @nx/enforce-module-boundaries
import { AppModule } from '@neox-api/app';
import { TypeormModule, TypeormService } from '@neox-api/db';
import {
  CreateUserDto,
  IUserOmitHash,
  UsersService,
} from '@neox-api/endpoints';
import { NotFoundException } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Test, TestingModule } from '@nestjs/testing';

describe('Base Entity Service (integration)', () => {
  let app: NestFastifyApplication;
  let typeormService: TypeormService;
  let userService: UsersService;
  let createdFirstUser: IUserOmitHash;
  let createdSecondUser: IUserOmitHash;
  const createFirstUserDto: CreateUserDto = {
    email: 'test@example.com',
    password: 'testPassword',
  };
  const createSecondUserDto: CreateUserDto = {
    email: 'test2@example.com',
    password: 'testPassword',
  };

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule, TypeormModule],
    }).compile();
    typeormService = moduleRef.get(TypeormService);
    userService = moduleRef.get(UsersService);
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

  describe('create', () => {
    it('should create a new user', async () => {
      createdFirstUser = await userService.create(createFirstUserDto);
      createdSecondUser = await userService.create(createSecondUserDto);
      expect(createdFirstUser.email).toEqual(createFirstUserDto.email);
      expect(createdSecondUser.email).toEqual(createSecondUserDto.email);
    });
  });

  describe('findAll', () => {
    it('should find all users', async () => {
      const users = await userService.findAll();
      expect(users.length).toBeGreaterThan(0);
    });
  });

  describe('findById', () => {
    it('should find a user by id', async () => {
      const user = await userService.findById(createdFirstUser.id);
      expect(user.id).toEqual(createdFirstUser.id);
    });
  });

  describe('updatePatch', () => {
    it('should partially update a user', async () => {
      const updatedEmail = 'updated@example.com';
      const updatedUser = await userService.updatePatch(createdSecondUser.id, {
        email: updatedEmail,
      });
      expect(updatedUser.email).toEqual(updatedEmail);
    });
  });

  describe('updatePut', () => {
    it('should fully update a user', async () => {
      const newUserInfo = { email: 'new@example.com', password: 'newPassword' };
      const updatedUser = await userService.updatePut(
        createdSecondUser.id,
        newUserInfo,
      );
      expect(updatedUser.email).toEqual(newUserInfo.email);
    });
  });

  describe('findOneBy', () => {
    it('should find one user by email', async () => {
      const user = await userService.findOneBy({
        email: createdFirstUser.email,
      });
      expect(user).toBeDefined();
      console.log('user', user);
      expect(user.email).toEqual(createdFirstUser.email);
    });
  });

  describe('remove', () => {
    it('should remove a user', async () => {
      await userService.remove(createdSecondUser.id);
      await expect(userService.findById(createdSecondUser.id)).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
