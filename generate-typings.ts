import { GraphQLDefinitionsFactory } from '@nestjs/graphql';

import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./apps/api/**/*.graphql'],
  path: join(process.cwd(), '/apps/api/src/graphql.schema.ts'),
});
