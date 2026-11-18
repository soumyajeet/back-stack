import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
    { id: 3, name: 'User 3', email: 'user3@example.com' },
    { id: 4, name: 'User 4', email: 'user4@example.com' },
    { id: 5, name: 'User 5', email: 'user5@example.com' },
    { id: 6, name: 'User 6', email: 'user6@example.com' },
    { id: 7, name: 'User 7', email: 'user7@example.com' },
    { id: 8, name: 'User 8', email: 'user8@example.com' },
    { id: 9, name: 'User 9', email: 'user9@example.com' },
    { id: 10, name: 'User 10', email: 'user10@example.com' },
  ];

  getUsers(): User[] {
    return this.users;
  }

  createUser(user: User): { message: string } {
    this.users.push(user);
    return { message: 'User created successfully' };
  }

  updateUser(id: number, updatedUser: Partial<User>): { message: string } {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = {
        ...this.users[userIndex],
        ...updatedUser,
      };
      return { message: 'User updated successfully' };
    }
    return { message: 'User not found' };
  }

  deleteUser(id: number): { message: string } {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
      return { message: 'User deleted successfully' };
    }
    return { message: 'User not found' };
  }
}
