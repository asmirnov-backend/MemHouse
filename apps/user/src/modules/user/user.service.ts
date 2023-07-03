import { UpdateUserInput } from './interfaces/input/updateUser.input.interface';
import { UserModel } from './models/user.model';

import { PrismaService } from '../../../../../libs/common/src/modules/prisma/prisma.service';

import { Injectable } from '@nestjs/common';
import { omit } from 'lodash';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUser(params: { userId: string }): Promise<UserModel | null> {
    return this.prisma.user.findUnique({
      where: { id: params.userId },
      include: {
        viewedMemes: true,
        createdMems: true,
      },
    });
  }

  updateUser(input: UpdateUserInput): Promise<UserModel> {
    return this.prisma.user.update({
      where: { id: input.userId },
      data: omit(input, 'userId'),
    });
  }
}
