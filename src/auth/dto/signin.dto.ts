import { IsEmail, IsEmpty, IsString } from 'class-validator';

export class SignInDto {
  @IsString()
  username?: string;

  @IsEmail()
  email?: string;

  @IsEmpty()
  password: string;
}
