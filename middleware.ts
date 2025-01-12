import { ALBUMS } from "@/data"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const folder = ALBUMS[0].folder
  const url = `/album/${folder}`
  return NextResponse.redirect(new URL(url, request.url))
}

export const config = {
  matcher: "/",
}
