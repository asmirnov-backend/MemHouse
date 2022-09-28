import { AppModule } from '@api/app.module';
import { MemFull } from '@api/mem/dto/mem-full.model';

import { HttpServer, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { GraphQLFormattedError } from 'graphql';
import * as request from 'supertest';

jest.setTimeout(10_000);
const GRAPHQL_URL = '/graphql';

describe('AdvertiserResolver', () => {
  let app: TestingModule;
  let nestApp: INestApplication;
  let server: HttpServer;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    nestApp = app.createNestApplication();
    await nestApp.init();
    server = nestApp.getHttpServer();
  });

  afterAll(async () => await nestApp.close());

  it('MemResolver', async () => {
    const result = await request(server).post(GRAPHQL_URL).send({
      query: '{ bestMems(GetBestMemsInput: {}) { id likes rating }}',
    });

    const response: {
      data: MemFull;
      error: { errors: GraphQLFormattedError[] };
    } = result.body;

    expect(response).not.toHaveProperty('error');
    expect(response.data).toMatchSnapshot();
  });
});
