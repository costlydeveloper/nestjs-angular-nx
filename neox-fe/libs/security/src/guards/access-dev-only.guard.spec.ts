import { environment } from '@team-link/config';
import { accessDevOnlyGuard } from './access-dev-only.guard';

describe('accessDevOnlyGuard', () => {
  const routerStateSnapshotMock: any = {};
  const routeMock: any = {};

  it('should allow access in development environment', () => {
    jest.replaceProperty(environment, 'production', false);
    expect(accessDevOnlyGuard(routeMock, routerStateSnapshotMock)).toBe(true);
  });

  it('should not allow access in production environment', () => {
    jest.replaceProperty(environment, 'production', true);
    expect(accessDevOnlyGuard(routeMock, routerStateSnapshotMock)).toBe(false);
  });
});
