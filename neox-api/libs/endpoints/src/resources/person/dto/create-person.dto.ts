import { Nullable } from '@neox-api/shared/common';
import { IsString } from 'class-validator';
import { BaseCreateDto } from '../../../base';

export class CreatePersonDto extends BaseCreateDto {
  @IsString()
  firstName!: Nullable<string>;
  @IsString()
  lastName!: Nullable<string>;
}
