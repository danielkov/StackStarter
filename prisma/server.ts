import { ApolloServer } from 'apollo-server-micro';
import { applyMiddleware } from 'graphql-middleware';

import permissions from './permissions';
import schema from './schema';
import createContext from './context';

const apolloServer = new ApolloServer({
  schema: applyMiddleware(schema, permissions),
  context: createContext,
});

export default apolloServer;
