import { EMAIL_REGEXP, MESSAGE } from '@neox-api/shared/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { BaseCreateDto } from '../../../base';

export class CreateUserDto extends BaseCreateDto {
  @IsString()
  @MinLength(4)
  @MaxLength(30)
  @Matches(EMAIL_REGEXP, {
    message: MESSAGE.VALIDATION.USERNAME_MUST_BE_EMAIL,
  })
  @ApiProperty({
    minLength: 4,
    maxLength: 30,
    pattern: MESSAGE.VALIDATION.USERNAME_MUST_BE_EMAIL,
    example: 'test@test.com',
  })
  email!: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  /*  @Matches(PASSWORD_REGEXP, {
    message: MESSAGE.VALIDATION.WEAK_PASSWORD,
  })*/
  @ApiProperty({
    minLength: 8,
    maxLength: 32,
    //pattern: PASSWORD_REGEXP.source,
    example: 'StrongPassword123',
    format: 'password',
  })
  password!: string;
}
