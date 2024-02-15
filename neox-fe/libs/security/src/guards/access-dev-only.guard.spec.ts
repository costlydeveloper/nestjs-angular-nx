import { environmentGlobal } from '@team-link/config';
import { accessDevOnlyGuard } from './access-dev-only.guard';

describe('accessDevOnlyGuard', () => {
  const routerStateSnapshotMock: any = {};
  const routeMock: any = {};

  it('should allow access in development environment', () => {
    jest.replaceProperty(environmentGlobal, 'production', false);
    expect(accessDevOnlyGuard(routeMock, routerStateSnapshotMock)).toBe(true);
  });

  it('should not allow access in production environment', () => {
    jest.replaceProperty(environmentGlobal, 'production', true);
    expect(accessDevOnlyGuard(routeMock, routerStateSnapshotMock)).toBe(false);
  });
});
