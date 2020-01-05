import apolloServer from '../../prisma/server';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api' });
