import { TypeormModule } from '@neox-api/shared/common';
import { Module } from '@nestjs/common';
import { CleanDbController } from './clean-db.controller';

/**
 * WARNING: Test-Only Controller
 *
 * This controller and its endpoints are exclusively available in the TEST environment.
 * It contains operations that are potentially destructive and are intended solely
 * for testing purposes, such as cleaning the database.
 *
 * Ensure that `NODE_ENV` is set to 'test' before utilizing these endpoints.
 * Under no circumstances should this controller be accessible in production or
 * development environments due to the high risk of data loss and other unintended side effects.
 *
 * Usage of this controller outside the test environment is strictly prohibited and
 * should be tightly controlled and monitored. Proceed with caution.
 */

const controllers = [];
if (process.env['NODE_ENV'] === 'test') {
  controllers.push(CleanDbController);
}

@Module({
  controllers: controllers,
  imports: [TypeormModule],
})
export class CleanDbModule {}
