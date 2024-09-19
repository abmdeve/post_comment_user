import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'VOUS DEVEZ FOURNIR UNE ADRESSE MAIL VALIDE' })
  email: string;

  @IsNotEmpty()
  @IsString({ message: 'VOUS DEVEZ FOURNIR UN FIRSTNAME' })
  firstname: string;

  @IsNotEmpty()
  @IsString({ message: 'VOUS DEVEZ FOURNIR UN FIRSTNAME' })
  lastname: string;

  @IsNotEmpty()
  @MinLength(6, {
    message: 'VOTRE MOT DE PASSE DOIT FAIRE PLUS DE 6 CARACTERES',
  })
  password: string;
}
