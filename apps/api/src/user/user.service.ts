import { UserDto } from './dto/user.model';

import { PrismaService } from '@api/prisma/prisma.service';

import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUser(params: { userId: string }): Promise<UserDto | null> {
    return this.prisma.user.findUnique({
      where: { id: params.userId },
      include: {
        viewedMemes: true,
        createdMems: true,
        profile: true,
      },
    });
  }
}
