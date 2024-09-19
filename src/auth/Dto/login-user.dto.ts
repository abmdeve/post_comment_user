import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6, {
    message: 'VOTRE MOT DE PASSE DOIT FAIRE PLUS DE 6 CARACTERES',
  })
  password: string;
}
