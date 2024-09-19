import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/auth/Dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private repo: Repository<UserEntity>,
  ) {}

  //   CREATE NEW USER
  createUser(users: CreateUserDto) {
    const user = this.repo.create(users);

    return this.repo.save(user);
  }

  //   RETURN EMAIL EXISTING
  findUserByEmail(email: string) {
    return this.repo.find({ where: { email } });
  }

  //   FIND ONE USER BY ID
  findOneUserById(userId: string) {
    if (!userId) {
      return null;
    }

    return this.repo.findOne({ where: { userId } });
  }
}
