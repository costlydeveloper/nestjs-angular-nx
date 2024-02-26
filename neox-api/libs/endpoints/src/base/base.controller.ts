import { ClassType, UuidValidationPipe } from '@neox-api/shared/common';
import { Body, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BaseEntityService } from './base-entity.service';

export abstract class BaseController<
  EntityInterface,
  ViewModel,
  CreateDto,
  UpdateDto,
> {
  protected constructor(
    private readonly service: BaseEntityService<
      EntityInterface,
      CreateDto,
      UpdateDto
    >,
    private readonly viewModelClass: ClassType<ViewModel>,
    private readonly createDtoClass: ClassType<CreateDto>,
    private readonly updateDtoClass: ClassType<UpdateDto>,
  ) {}

  @Post()
  async create(@Body() createDto: CreateDto): Promise<ViewModel> {
    // Transforms and validates the input DTO using Class Transformer
    const dto = plainToInstance(this.createDtoClass, createDto);
    // Creates an entity in the database
    const entity = await this.service.create(dto);
    // Transforms the output entity into ViewModel, ready for sending to the client
    return plainToInstance(this.viewModelClass, entity);
  }

  @Get(':id')
  async getById(
    @Param('id', UuidValidationPipe) id: string,
  ): Promise<ViewModel> {
    // Gets an entity from the database
    const entity = await this.service.findById(id);
    // Transforms the output entity into ViewModel, ready for sending to the client
    return plainToInstance(this.viewModelClass, entity);
  }

  @Patch(':id')
  async updatePartial(
    @Param('id', UuidValidationPipe) id: string,
    @Body() updateDto: UpdateDto,
  ): Promise<ViewModel> {
    // Transforms and validates the input DTO using Class Transformer
    const dto = plainToInstance(this.updateDtoClass, updateDto);
    // Updates the entity in the database
    const entity = await this.service.updatePatch(id, dto);
    // Transforms the output entity into ViewModel, ready for sending to the client
    return plainToInstance(this.viewModelClass, entity);
  }

  @Put(':id')
  async update(
    @Param('id', UuidValidationPipe) id: string,
    @Body() createDto: CreateDto,
  ): Promise<ViewModel> {
    // Transforms and validates the input DTO using Class Transformer
    const dto = plainToInstance(this.createDtoClass, createDto);
    // Updates the entity in the database
    const entity = await this.service.updatePut(id, dto);
    // Transforms the output entity into ViewModel, ready for sending to the client
    return plainToInstance(this.viewModelClass, entity);
  }

  @Delete(':id')
  async remove(@Param('id', UuidValidationPipe) id: string): Promise<void> {
    // Deletes the entity from the database
    return await this.service.remove(id);
  }

  @Get()
  findAll(): Promise<EntityInterface[]> {
    return this.service.findAll();
  }
}
