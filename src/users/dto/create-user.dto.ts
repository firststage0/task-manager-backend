import { IsEmail, IsEmpty, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @IsEmpty()
  username: string;

  @IsEmail()
  email: string;

  @IsStrongPassword({
    minLength: 8,
  })
  password: string;
}
