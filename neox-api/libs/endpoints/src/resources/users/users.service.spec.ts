import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUser, User } from './user.entity';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let fakeUsersRepository: Partial<Repository<IUser>>;

  beforeEach(async () => {
    fakeUsersRepository = {};

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: fakeUsersRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new user', async () => {
    const createUserDto = {
      email: 'testuser',
      password: 'testpassword',
    };

    const createdUser = await service.create(createUserDto);

    expect(createdUser).toBeDefined();
    //expect(createdUser.email).toBe(createUserDto.email);
    expect(createdUser).not.toHaveProperty('password');
  });
});
