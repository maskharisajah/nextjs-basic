import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  //   mengambil cookie
  const token = request.cookies.get("token");

  console.log("token", token);

  if (pathname.startsWith("/admin") && !token?.value) {
    return NextResponse.redirect(new URL("/forbidden", request.nextUrl));
    console.log("Middleware Called");
  }
}

// export const config = {
//   matcher: "/posts/:path*",
// };
