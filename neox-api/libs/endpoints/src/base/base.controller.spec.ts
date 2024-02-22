import { Nullable } from '@neox-api/shared/common';
import { Controller } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { plainToInstance } from 'class-transformer';
import { IsString } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { BaseController } from './base.controller';
import { BaseEntity } from './base.entity';

jest.mock('class-transformer');
@Entity()
class TestEntity extends BaseEntity {
  @Column({ nullable: true })
  firstName: string | null = 'Anakin';
  @Column({ nullable: true })
  lastName: string | null = 'Skywalker';
}

export class CreateTestDto {
  @IsString()
  firstName: Nullable<string> = 'Anakin';
  @IsString()
  lastName: Nullable<string> = 'Skywalker';
}

class UpdateTestDto {}

// Kreiranje privremenog servisa za testiranje
const mockBaseEntityService = {
  create: jest.fn().mockResolvedValue(new TestEntity()),
  findById: jest.fn().mockResolvedValue(new TestEntity()),
  // Dodajte mock implementacije za ostale metode kako je potrebno
};

@Controller('test')
class TestController extends BaseController<
  TestEntity,
  CreateTestDto,
  UpdateTestDto
> {
  constructor() {
    super(mockBaseEntityService as any, CreateTestDto, UpdateTestDto);
  }
}

describe('BaseController', () => {
  let controller: TestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestController],
      // Ovdje nismo dodali providers jer mock servis direktno proslijeđujemo kroz konstruktor
    }).compile();

    controller = module.get<TestController>(TestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should successfully create a new entity', async () => {
      const createDto = new CreateTestDto();
      const expectedEntity = new TestEntity();

      mockBaseEntityService.create.mockResolvedValue(expectedEntity);

      await expect(controller.create(createDto)).resolves.toEqual(
        expectedEntity,
      );
      expect(mockBaseEntityService.create).toHaveBeenCalledWith(createDto);
    });

    it('should transform the input object to CreateTestDto and call the service with it', async () => {
      const inputObject = {
        firstName: 'Anakin',
        redundantProp: 'should be ignored',
      };
      const transformedDto = new CreateTestDto();
      transformedDto.firstName = 'Anakin';

      // Mock `plainToInstance` da se ponaša kao da transformira ulaz u DTO
      (plainToInstance as jest.Mock).mockReturnValue(transformedDto);

      const expectedEntity = new TestEntity();
      mockBaseEntityService.create.mockResolvedValue(expectedEntity);

      await expect(controller.create(inputObject as any)).resolves.toEqual(
        expectedEntity,
      );

      expect(plainToInstance).toHaveBeenCalledWith(CreateTestDto, inputObject);

      expect(mockBaseEntityService.create).toHaveBeenCalledWith(transformedDto);
    });
  });
});
