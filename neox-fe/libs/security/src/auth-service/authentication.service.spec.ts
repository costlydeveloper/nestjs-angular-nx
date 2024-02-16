import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LocalStorageService } from '@team-link/utils';
import { throwError } from 'rxjs';
import { AuthApiService } from '../auth-api';
import { AuthenticationService } from './authentication.service';

describe('Authentication Service', () => {
  let authService: AuthenticationService;
  let localStorage: LocalStorageService;
  let authApiServiceMock: jest.Mocked<AuthApiService>;
  let routerMock: jest.Mocked<Router>;
  let alertMock: jest.SpyInstance;

  beforeEach(() => {
    routerMock = {
      navigateByUrl: jest.fn(),
    } as any;

    const localStorageServiceMock = {
      setItem: jest.fn(),
      getItem: jest.fn(),
      removeItem: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        {
          provide: LocalStorageService,
          useValue: localStorageServiceMock,
        },
        { provide: AuthApiService, useValue: { signIn: jest.fn() } },
        { provide: Router, useValue: routerMock },
        AuthenticationService,
      ],
    });
    authService = TestBed.inject(AuthenticationService);
    authApiServiceMock = TestBed.inject(AuthApiService) as any; // Cast to any for mock setup
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('Initialization', () => {
    it('should be created', () => {
      expect(authService).toBeTruthy();
    });
  });

  describe('User Logout', () => {
    it('should log out the user and navigate to the home page', () => {
      // Setup: Set a fake user as logged in
      authService['isUserLoggedIn'].next(true);

      // Action: Call the logout method
      authService.logout();

      // Assertion: Ensure that the user is logged out and navigation is performed
      expect(authService['isUserLoggedIn'].value).toBeFalsy();
      expect(routerMock.navigateByUrl).toHaveBeenCalledWith('/');
    });
  });

  describe('Login Error Handling', () => {
    it('should handle login error and call errorCase method', () => {
      alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

      const errorResponse = { message: 'Login failed' };

      authApiServiceMock.signIn.mockReturnValue(
        throwError(() => errorResponse)
      );

      const spyErrorCase = jest.spyOn(authService, 'errorCase');

      authService.signIn('testuser', 'testpassword');

      expect(spyErrorCase).toHaveBeenCalledWith(errorResponse.message);
    });
  });
});
