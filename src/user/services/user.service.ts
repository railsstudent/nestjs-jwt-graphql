import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities';

@Injectable()
export class UserService {
  readonly users: UserEntity[] = [];

  constructor() {
    for (let i = 0; i < 3; i++) {
      this.users.push({
        id: `user-${i + 1}`,
        email: `user-${i + 1}@yopmail.com`,
        firstName: `first name ${i + 1}`,
        lastName: `last name ${i + 1}`,
        password: `password${i + 1}`,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      });
    }
  }

  findAll(): UserEntity[] {
    return this.users;
  }

  findOne(id: string): UserEntity | undefined {
    return this.users.find((user) => user.id === id);
  }

  login(input: { email: string; password: string }): UserEntity | undefined {
    const { email, password } = input;
    return this.users.find((user) => user.email === email && user.password === password);
  }
}
