import { authkitMiddleware } from "@workos-inc/authkit-nextjs"

export default authkitMiddleware({
  redirectUri: process.env.NEXT_PUBLIC_WORKOS_REDIRECT_URI,
  middlewareAuth: {
    enabled: true,
    unauthenticatedPaths: ["/"],
  },
})

export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"],
}
