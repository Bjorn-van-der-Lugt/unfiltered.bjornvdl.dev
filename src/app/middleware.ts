import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

function generateNonce(): string {
  const array = new Uint8Array(16);

  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array));
}

export function middleware(request: NextRequest) {
  const nonce = generateNonce();

  const isDevelopment = process.env.NODE_ENV === 'development';

  let vercelUrlPart = '';
  if (process.env.VERCEL_URL) {
    try {
      vercelUrlPart = `https://${new URL(process.env.VERCEL_URL).hostname}`;
    } catch (e) {
      console.error("Error parsing VERCEL_URL in middleware:", e);
      vercelUrlPart = ''; 
    }
  }

  const styleHashes: string[] = ["'sha256-zlqnbDt84zf1iSefLU/ImC54isoprH/MRiVZGskwexk='"];
  const scriptHashes: string[] = [];

  const csp = `
    default-src 'self';
    script-src 'nonce-${nonce}' ${scriptHashes.join(' ')} 'strict-dynamic' ${isDevelopment ? "'unsafe-eval'" : ''};
    style-src 'self' 'nonce-${nonce}' ${styleHashes.join(' ')} 'unsafe-hashes' https://fonts.googleapis.com https://*.sanity.io ${isDevelopment ? "'unsafe-inline'" : ''};
    font-src 'self' https://fonts.gstatic.com;
    img-src 'self' data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    connect-src 'self' ${vercelUrlPart} https://*.sanity.io https://accounts.sanity.io https://cdn.sanity.io ${isDevelopment ? 'http://localhost:* ws://localhost:*' : ''};
    frame-ancestors 'none';
    frame-src https://www.google.com https://maps.google.com https://www.openstreetmap.org https://*.sanity.io https://accounts.sanity.io;
    upgrade-insecure-requests;
  `
    .replace(/\s{2,}/g, ' ')
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce); 

  const response = NextResponse.next({
    request: {
      headers: requestHeaders, 
    },
  });

  response.headers.set('Content-Security-Policy', csp);

  return response;
}