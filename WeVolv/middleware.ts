import { NextRequest, NextResponse } from "next/server";

// Toggle to take the site down without touching any page code.
// Set to false (or delete this block) to restore the live site instantly.
const MAINTENANCE_MODE = true;

const MAINTENANCE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Site Unavailable</title>
<style>
  html, body { height: 100%; margin: 0; }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0a0a0a;
    color: #f5f5f5;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    text-align: center;
    padding: 24px;
  }
  p { font-size: 1.25rem; max-width: 32rem; }
</style>
</head>
<body>
  <p>This website is temporarily unavailable.</p>
</body>
</html>`;

function buildCsp(nonce: string): string {
  return [
    "default-src 'self'",
    // nonce-based: removes unsafe-inline for modern browsers; strict-dynamic
    // trusts scripts loaded by already-trusted (nonced) scripts
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: blob: https:",
    "frame-src https://portal.wevolvlife.com",
    "media-src 'self'",
    "connect-src 'self' https://fonts.googleapis.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' https://portal.wevolvlife.com",
    "upgrade-insecure-requests",
  ].join("; ");
}

export async function middleware(request: NextRequest) {
  if (MAINTENANCE_MODE) {
    return new NextResponse(MAINTENANCE_HTML, {
      status: 503,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  }

  // Generate a per-request nonce and thread it to the layout via request header
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const csp = buildCsp(nonce);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("Content-Security-Policy", csp);

  return response;
}

export const config = {
  // Run on all routes except Next.js internals and static assets
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp4|webm|woff2?|ttf|otf)$).*)"],
};
