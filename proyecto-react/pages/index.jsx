
import HomeTags from "@/components/Home/hometags"
import HomePrincipal from "@/components/Home/homeprincipal"
import HomeIcons from "@/components/Home/homeicons"
import Navbar from "@/components/Home/navbar"


export default function Home () {

  return  (
    <main>
        <Navbar/>
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
