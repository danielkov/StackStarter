import { verify } from 'jsonwebtoken';
import { Context } from './context';

export const APP_SECRET = 'appsecret321';

interface Token {
  userId: string;
}

export const getUserId = (context: Context) => {
  const { authorization } = context.req.headers;
  if (authorization) {
    const token = authorization.replace('Bearer ', '');
    const verifiedToken = verify(token, APP_SECRET) as Token;
    return verifiedToken && verifiedToken.userId;
  }
};
