import { IsString } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  //@MinLength(4)
  // @MaxLength(20)
  username!: string;

  @IsString()
  /*@MinLength(8)
											@MaxLength(32)
											@Matches(PASSWORD_REGEXP, {
											  message: MESSAGE.VALIDATION.WEAK_PASSWORD,
											})*/
  password!: string;
}
