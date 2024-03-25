import {
  EMAIL_REGEXP,
  MESSAGE,
  PASSWORD_REGEXP,
} from '@neox-api/shared/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthDto {
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
  @ApiProperty({
    pattern: PASSWORD_REGEXP.source,
    example: 'StrongPassword123',
    format: 'password',
  })
  password!: string;
}
