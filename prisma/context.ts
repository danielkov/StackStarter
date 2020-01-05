import { Photon } from '@prisma/photon';
import { ServerResponse } from 'http';
import { MicroRequest } from 'apollo-server-micro/dist/types';

const photon = new Photon();

export interface Context {
  photon: Photon;
  req: MicroRequest;
  res: ServerResponse;
}

const createContext = (request: {
  req: MicroRequest;
  res: ServerResponse;
}): Context => ({
  ...request,
  photon,
});

export default createContext;
