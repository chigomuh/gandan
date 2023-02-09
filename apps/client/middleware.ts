import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '~/pages/api/oauth/token/token.utils';
import { env } from './constants';

export const config = {
  matcher: ['/api/:path*'],
};

const excludePaths = ['/api/oauth/auth', '/api/oauth/token'];

const middleware = async (req: NextRequest) => {
  const {
    nextUrl: { pathname: nextPath },
    headers,
  } = req;
  const { rewrite } = NextResponse;

  if (excludePaths.includes(nextPath)) {
    return rewrite(new URL(nextPath, req.url));
  }

  const token = headers.get('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return new NextResponse(
      JSON.stringify({
        message: 'Unauthorized',
      }),
      { status: 401 }
    );
  }

  // TODO: 토큰 검증
  if (!env.ACCESS_TOKEN_SECRET) {
    return new NextResponse(
      JSON.stringify({
        message: 'Internal server error',
      }),
      { status: 500 }
    );
  }

  try {
    await verifyToken(token, env.ACCESS_TOKEN_SECRET);
  } catch (error: any) {
    if (!error.code) {
      return new NextResponse(
        JSON.stringify({
          message: 'Internal server error',
        }),
        { status: 500 }
      );
    }

    switch (error.code) {
      case 'ERR_JWT_EXPIRED':
        return new NextResponse(
          JSON.stringify({
            message: 'Unauthorized',
          }),
          { status: 401 }
        );
      case 'ERR_JWS_INVALID':
        return new NextResponse(
          JSON.stringify({
            message: 'Unauthorized',
          }),
          { status: 401 }
        );
      default:
        return new NextResponse(
          JSON.stringify({
            message: 'Internal server error',
          }),
          { status: 500 }
        );
    }
  }

  return rewrite(new URL(nextPath, req.url));
};

export default middleware;
