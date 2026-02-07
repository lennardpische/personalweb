import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

function isMaintenanceMode(): boolean {
  // Edge Runtime only sees NEXT_PUBLIC_* vars on Vercel
  const value =
    process.env.NEXT_PUBLIC_MAINTENANCE_MODE ?? process.env.MAINTENANCE_MODE ?? '';
  return value === '1' || value === 'true';
}

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/maintenance')) {
    return NextResponse.next();
  }

  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/favicon') ||
    /\.(ico|png|jpg|jpeg|svg|webp|gif)$/i.test(request.nextUrl.pathname)
  ) {
    return NextResponse.next();
  }

  if (isMaintenanceMode()) {
    return NextResponse.redirect(new URL('/maintenance', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|api/).*)'],
};
