import { GraphQLResponse } from 'apollo-server-types';
import * as request from 'supertest';

const BASE_PATH = 'http://localhost:3001';
const GRAPHQL_URL = '/graphql';

export async function sendForTest(input: {
  query?: string;
  mutation?: string;
}): Promise<GraphQLResponse> {
  const response = await request(BASE_PATH).post(GRAPHQL_URL).send(input);

  return response.body;
}
