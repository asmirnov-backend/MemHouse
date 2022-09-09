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
      include: {
        viewedMemes: true,
        createdMems: true,
        Profile: true,
      },
    });
  }
}
