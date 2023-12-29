import { Delete, Get, Param } from '@nestjs/common';
import { BaseEntityService } from './base-entity.service';

export abstract class BaseController<T> {
  protected constructor(private service: BaseEntityService<T>) {}

  @Get('/:id')
  getById(@Param('id') id: string): Promise<T> {
    return this.service.findById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.service.remove(id);
  }
}
