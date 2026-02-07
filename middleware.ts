import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

function isMaintenanceMode(): boolean {
  return process.env.MAINTENANCE_MODE === '1' || process.env.MAINTENANCE_MODE === 'true';
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
