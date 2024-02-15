import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthenticationService } from '@team-link/data-access';

import { of } from 'rxjs';
import { APP_ROUTE, ROUTE_DATA } from '../constants';
import { accessAppLayoutGuard } from './access-app-layout.guard';

describe('accessAppLayoutGuard', () => {
  const MOCK_ROUTER = {
    navigate: jest.fn(),
  };

  const MOCK_AUTHENTICATION_SERVICE = {
    isUserLoggedIn$: of(false),
  };

  let service: AuthenticationService;
  let router: Router;
  const routerStateSnapshotMock: any = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: MOCK_ROUTER },
        {
          provide: AuthenticationService,
          useValue: MOCK_AUTHENTICATION_SERVICE,
        },
      ],
    });
    service = TestBed.inject(AuthenticationService);
    router = TestBed.inject(Router);
  });

  it('should navigate to authentication if user is not logged in and requires login', async () => {
    const routeMock: any = { data: { [ROUTE_DATA.REQUIRES_LOGIN]: true } };

    MOCK_AUTHENTICATION_SERVICE.isUserLoggedIn$ = of(false);

    const result = await TestBed.runInInjectionContext(() =>
      accessAppLayoutGuard(routeMock, routerStateSnapshotMock),
    );
    expect(result).toBe(false);
    expect(MOCK_ROUTER.navigate).toHaveBeenCalledWith([
      APP_ROUTE.AUTHENTICATION,
    ]);
  });

  it('should allow access if user is logged in and requires login', async () => {
    const routeMock: any = { data: { [ROUTE_DATA.REQUIRES_LOGIN]: true } };
    MOCK_AUTHENTICATION_SERVICE.isUserLoggedIn$ = of(true);

    const result = await TestBed.runInInjectionContext(() =>
      accessAppLayoutGuard(routeMock, routerStateSnapshotMock),
    );

    expect(result).toBe(true);
    expect(MOCK_ROUTER.navigate).not.toHaveBeenCalled();
  });

  it('should allow access if route does not require login', async () => {
    const routeMock: any = { data: { [ROUTE_DATA.REQUIRES_LOGIN]: false } };

    const result = await TestBed.runInInjectionContext(() =>
      accessAppLayoutGuard(routeMock, routerStateSnapshotMock),
    );

    expect(result).toBe(true);
    expect(MOCK_ROUTER.navigate).not.toHaveBeenCalled();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});
