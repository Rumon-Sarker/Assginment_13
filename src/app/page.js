import Link from "next/link"
export default function Home() {
  return (

    <>
      <h1 className='mt-20 text-4xl text-red-500 text-center'>THis is Home page</h1>

      <button className="w-56 border-2 rounded bg-gray-400 text-whte-700 mx-56 mt-20"><Link href="/cookie">CookieSet</Link></button>
    </>
  )
}
