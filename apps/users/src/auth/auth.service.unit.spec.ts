import { AuthModule } from './auth.module';
import { AuthService } from './auth.service';

import { PrismaService } from '../prisma/prisma.service';

import { UnauthorizedException } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthModule],
    })
      .overrideProvider(PrismaService)
      .useValue({
        user: {
          findUnique: jest.fn().mockResolvedValue({
            id: '25446eb5-8324-4816-966a-447a1965ae56',
            password:
              '$2b$10$QJVPbrNlebywKZzixnxfT.RIM5I2Cy3N53kEJDcgp.4yUXRs8oUo6',
            salt: 10,
          }),
        },
      })
      .compile();

    service = module.get(AuthService);
  });

  it('Serice is defined', () => {
    expect(service).toBeDefined();
  });

  describe('login', () => {
    it('Throw an Unauthorised error for incorrect credentials', () => {
      expect(
        service.login({ email: '', password: 'inccorrect' }),
      ).rejects.toThrow(UnauthorizedException);
    });

    it('Return jwt for correct credentials', async () => {
      const result = await service.login({
        email: '',
        password: '123456',
      });

      expect(result).toEqual({ jwtToken: expect.any(String) });
    });
  });
});
