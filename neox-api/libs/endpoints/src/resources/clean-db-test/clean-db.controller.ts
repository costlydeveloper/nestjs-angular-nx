// eslint-disable-next-line @nx/enforce-module-boundaries
import { MESSAGE, Public, TypeormService } from '@neox-api/shared/common';
import { Controller, Delete, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('test')
export class CleanDbController {
  constructor(private typeormService: TypeormService) {}
  /**
   * WARNING: Test-Only Endpoint
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
  @Public()
  @Delete('clean-database')
  @HttpCode(HttpStatus.OK)
  async cleanDatabase(): Promise<string> {
    await this.typeormService.cleanDatabase();
    return MESSAGE.INFO.DATABASE_IS_CLEANED;
  }
}
