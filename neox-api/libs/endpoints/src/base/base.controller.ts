import { ClassType, UuidValidationPipe } from '@neox-api/shared/common';
import { Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BaseEntityService } from './base-entity.service';

export abstract class BaseController<EntityInterface, CreateDto, UpdateDto> {
  protected constructor(
    private readonly service: BaseEntityService<
      EntityInterface,
      CreateDto,
      UpdateDto
    >,
    private readonly createDtoClass: ClassType<CreateDto>,
    private readonly updateDtoClass: ClassType<UpdateDto>,
  ) {}

  @Post()
  create(@Body() createDto: CreateDto) {
    const entity = plainToInstance(this.createDtoClass, createDto);
    return this.service.create(entity);
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
    console.log('updateDto', updateDto);
    const entity = plainToInstance(this.updateDtoClass, updateDto);
    console.log('entity', entity);

    return this.service.update(id, entity);
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
