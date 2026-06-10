import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    pages: {
      signIn: "/guides",
    },
    callbacks: {
      authorized: ({ token, req }) => {
        if (req.cookies.has("__prerender_bypass")) return true;
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ["/guides/:path*"],
};
