import arcjet, { detectBot, shield } from "@arcjet/next";
import { NextRequest, NextResponse } from "next/server";

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    // WAF: blocks SQLi, XSS, path traversal, and other common attack patterns
    shield({ mode: "LIVE" }),
    // Bot detection: allow legitimate crawlers, block scrapers/attack bots
    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY:SEARCH_ENGINE", // Google, Bing, DuckDuckGo, etc.
        "CATEGORY:MONITOR",       // Uptime & health monitoring services
        "CATEGORY:PREVIEW",       // Link previews (Slack, Discord, iMessage, etc.)
      ],
    }),
  ],
});

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
  const decision = await aj.protect(request);

  // Block requests flagged by shield WAF or bot detection
  if (decision.isDenied()) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // Block Tor exit nodes and known open proxies — these are almost always
  // used for abuse, not legitimate browsing of a wellness platform
  if (decision.ip.isTor() || decision.ip.isProxy()) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // Block traffic originating from hosting/datacenter IPs — real users
  // don't browse from AWS or DigitalOcean; this is scraper/bot traffic
  if (decision.ip.isHosting()) {
    return new NextResponse("Forbidden", { status: 403 });
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
