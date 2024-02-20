/*
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { Test } from '@nestjs/testing/test';

import { IUserOmitPassword, User, UsersService } from '../users';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

describe('AuthService', () => {
  let service: AuthService;
  let fakeUsersService: Partial<UsersService>;
  let fakeJwtService: Partial<JwtService>;
  beforeEach(async () => {
    const users: User[] = [];
    fakeUsersService = {
      create: (createUserDto: AuthDto) => {
        const user = {
          id: Math.floor(Math.random() * 999999).toString(),
          firstName: 'boris',
          lastName: 'jenicek',
          email: createUserDto.email,
          hash: createUserDto.password,
          isActive: true,
        } as User;
        users.push(user);
        return Promise.resolve(user);
      },
    };
    fakeJwtService = {
      sign: (payload: any) => {
        return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      },
    };
    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: fakeUsersService,
        },
        {
          provide: JwtService,
          useValue: fakeJwtService,
        },
      ],
    }).compile();

    service = module.get(AuthService);
  });
  it('can create an instance of auth service', async () => {
    expect(service).toBeDefined();
  });

  it('should sign in a user and return an access token', async () => {
    const userWithoutPassword = {
      id: '123',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe',
      isActive: true,
    } as IUserOmitPassword;

    const result = await service.signInLocal(userWithoutPassword);

    expect(result).toBeDefined();
    expect(typeof result.accessToken).toBe('string');
  });
});
*/
