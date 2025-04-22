import Link from "next/link"

const ProtectedPage = () => {
  return (
    <>
      <Link href={"/"}>
        <button>{"Home"}</button>
      </Link>
      <div>PROTECTED ROUTE</div>
    </>
  )
}

export default ProtectedPage
