import { GraphQLResponse } from 'apollo-server-types';
import * as request from 'supertest';

const BASE_PATH = 'http://localhost:3002';
const GRAPHQL_URL = '/graphql';

export async function sendForTest(params: {
  query?: string;
  mutation?: string;
}): Promise<GraphQLResponse> {
  const response = await request(BASE_PATH).post(GRAPHQL_URL).send(params);

  return response.body;
}
