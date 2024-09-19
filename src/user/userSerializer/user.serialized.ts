import { UserEntity } from '../entity/user.entity';

class UserSerialized {
  userId: string;
  email: string;
  firstname: string;
  latname: string;
}

export class UserSerializer {
  static serialize(users: UserEntity): UserSerialized {
    const user = new UserSerialized();

    user.userId = users.userId;
    user.email = users.email;
    user.firstname = users.firstname;
    user.latname = users.lastname;

    return user;
  }
}
