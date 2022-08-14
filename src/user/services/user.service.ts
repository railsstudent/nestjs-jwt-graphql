import { Injectable } from '@nestjs/common';
import { User } from '../entities';

@Injectable()
export class UserService {
  readonly users: User[] = [];

  constructor() {
    for (let i = 0; i < 3; i++) {
      this.users.push({
        id: `user-${i + 1}`,
        email: `user-${i + 1}@yopmail.com`,
        firstName: `first name ${i + 1}`,
        lastName: `last name ${i + 1}`,
      });
    }
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }
}
