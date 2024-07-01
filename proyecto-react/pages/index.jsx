import Link from "next/link"
import HomeTags from "@/components/Home/hometags"
import HomePrincipal from "@/components/Home/homeprincipal"
import HomeIcons from "@/components/Home/homeicons"


export default function Home () {
  return  (
    <main>
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <img className="h-10" src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="" />
        </div>
        <div className="flex-1 flex justify-center items-center">
           <input className="w-1/2 mx-4" type="search" placeholder=" 🔎 Search..."/>
        </div>
        <div className="flex space-x-4 items-center">
          <Link href="/CreateAccountPage">

          <button className="hover:text-[#1d4ed8] hover:underline">Login</button>
          </Link>
          <Link href="/CreateAccountPage">
          <button className="px-4 py-2 border text-[#1d4ed8] border-[#1d4ed8] rounded hover:bg-[#1d4ed8] hover:text-white">Create account</button>
          </Link>
        </div>
      </nav>
      <div className="flex flex-wrap">
        <div className="hidden md:block w-full md:w-1/4 lg:w-1/6 p-4">
          <HomeTags />
        </div>
        <div className="w-full md:w-3/4 lg:w-2/3 p-4">
          <HomePrincipal />
        </div>
        <div className="hidden lg:block w-full lg:w-1/6 p-4">
          <HomeIcons />
        </div>
      </div>
    </main>
  )
}
