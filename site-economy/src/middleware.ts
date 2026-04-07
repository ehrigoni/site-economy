import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Adicionar headers de segurança extras
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set(
    'Permissions-Policy',
    'geolocation=(), microphone=(), camera=()'
  )

  // Redirecionar HTTP para HTTPS
  if (
    request.headers.get('x-forwarded-proto') === 'http' &&
    process.env.NODE_ENV === 'production'
  ) {
    const url = request.nextUrl.clone()
    url.protocol = 'https'
    return NextResponse.redirect(url)
  }

  return response
}

export const config = {
  matcher: ['/:path*'],
}
