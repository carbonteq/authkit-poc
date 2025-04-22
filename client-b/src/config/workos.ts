export default {
  CLIENT_ID: process.env.WORKOS_CLIENT_ID as string,
  CLIENT_SECRET: process.env.WORKOS_API_KEY as string,
  CONNECTION_ID: process.env.WORKOS_CONNECTION_ID as string,
  ORGANIZATION_ID: process.env.WORKOS_ORGANIZATION_ID as string,
  REDIRECT_URI:
    process.env.WORKOS_REDIRECT_URI ||
    "http://localhost:3001/api/auth/callback",
}
