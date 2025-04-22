"use server"

import { signOut } from "@workos-inc/authkit-nextjs"
import { isRedirectError } from "next/dist/client/components/redirect-error"

export const logOutAction = async () => {
  try {
    await signOut({ returnTo: "http://localhost:3001/" })
  } catch (error) {
    if (isRedirectError(error)) throw error
    console.error("Auth Actions", "Logout", error)
    throw error
  }
}
