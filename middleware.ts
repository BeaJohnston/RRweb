import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const secret = process.env.AUTH_SECRET;
  const salt = process.env.JWT_SALT || '';  // Ensure you set JWT_SALT in your environment variables

  if (!secret) {
    throw new Error('AUTH_SECRET environment variable is not set');
  }

  const token = await getToken({ req, secret, salt });

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}
