import { nexusPrismaPlugin } from 'nexus-prisma';
import { makeSchema } from 'nexus';
import { join } from 'path';

import * as types from './types';

const schema = makeSchema({
  types,
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: join(__dirname, '/generated/schema.graphql'),
    typegen: join(__dirname, '/generated/nexus.ts'),
  },
  typegenAutoConfig: {
    sources: [
      {
        source: '@prisma/photon',
        alias: 'photon',
      },
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
    contextType: 'Context.Context',
  },
});

export default schema;
