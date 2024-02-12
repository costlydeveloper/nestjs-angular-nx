import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { APP_LOGGED_ROUTE_DEFAULT } from '@team-link/config';
import { AuthenticationService } from '@team-link/data-access-shared';
import { of } from 'rxjs';
import { accessAuthGuard } from './access-auth.guard';

describe('accessAuthGuard', () => {
  const routerStateSnapshotMock: any = {};
  const routeMock: any = {};
  const MOCK_ROUTER = {
    navigate: jest.fn(),
  };

  const MOCK_AUTHENTICATION_SERVICE = {
    isUserLoggedIn$: of(true),
  };

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
  });

  it('should redirect to default logged route if user is logged in', async () => {
    const result = await TestBed.runInInjectionContext(() =>
      accessAuthGuard(routeMock, routerStateSnapshotMock)
    );
    expect(result).toBe(false);
    expect(MOCK_ROUTER.navigate).toHaveBeenCalledWith([
      APP_LOGGED_ROUTE_DEFAULT,
    ]);
  });

  it('should allow access if user is not logged in', async () => {
    MOCK_AUTHENTICATION_SERVICE.isUserLoggedIn$ = of(false);

    const result = await TestBed.runInInjectionContext(() =>
      accessAuthGuard(routeMock, routerStateSnapshotMock)
    );

    expect(result).toBe(true);
    expect(MOCK_ROUTER.navigate).not.toHaveBeenCalled();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
