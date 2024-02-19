import { Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UuidValidationPipe } from '../pipes/uuid-validation.pipe';
import { BaseEntityService } from './base-entity.service';

export abstract class BaseController<EntityInterface, CreateDto, UpdateDto> {
  protected constructor(
    private service: BaseEntityService<EntityInterface, CreateDto, UpdateDto>,
  ) {}

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.service.create(createDto);
  }

  @Get(':id')
  getById(
    @Param('id', UuidValidationPipe) id: string,
  ): Promise<EntityInterface> {
    return this.service.findById(id);
  }

  @Patch(':id')
  update(
    @Param('id', UuidValidationPipe) id: string,
    @Body() updateDto: UpdateDto,
  ) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id', UuidValidationPipe) id: string): Promise<void> {
    return this.service.remove(id);
  }

  @Get()
  findAll(): Promise<EntityInterface[]> {
    return this.service.findAll();
  }
}
