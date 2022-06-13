import { CreateUserInput, User } from '@api/graphql.schema';
import { PrismaService } from '@api/prisma/prisma.service';

import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUser(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async createUser(createUserInput: CreateUserInput): Promise<User> {
    return this.prisma.user.create({
      data: {
        email: createUserInput.email,
        password: createUserInput.password,
        nickname: createUserInput.nickname,
      },
    });
  }
}
