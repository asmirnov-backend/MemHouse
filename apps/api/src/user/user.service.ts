import { UserCreateInput } from './dto/input/user-create.input';
import { UserUniqueInput } from './dto/input/user-get-unique.input';
import { User } from './dto/user.model';

import { PrismaService } from '@api/prisma/prisma.service';

import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUser(params: UserUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id: params.id, email: params.email, nickname: params.nickname },
    });
  }

  async createUser(params: UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data: {
        email: params.email,
        nickname: params.nickname,
        password: params.password,
      },
    });
  }
}
