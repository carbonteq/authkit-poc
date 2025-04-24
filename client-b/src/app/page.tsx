import Link from "next/link"
import {
  getSignInUrl,
  getSignUpUrl,
  withAuth,
} from "@workos-inc/authkit-nextjs"
import { logOutAction } from "../actions/auth.action"

const Home = async () => {
  const { user } = await withAuth()

  if (!user) {
    const signInUrl = await getSignInUrl()
    const signUpUrl = await getSignUpUrl()

    return (
      <>
        <Link href={signInUrl}>Log in</Link>
        {" | "}
        <Link href={signUpUrl}>Sign Up</Link>
        {" | "}
        <Link href={"/protected"}>Protected</Link>
      </>
    )
  }

  return (
    <>
      <form action={logOutAction}>
        <p>Welcome back {user?.firstName && `, ${user?.firstName}`}</p>
        <button type="submit">Sign out</button>
      </form>
      <Link href={"/protected"}>
        <button>{"Protected"}</button>
      </Link>
    </>
  )
}

export default Home
