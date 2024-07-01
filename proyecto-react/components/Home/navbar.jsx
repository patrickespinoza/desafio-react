import Link from "next/link"
import LogoutButton from "@/components/Home/logOut"
import { useEffect, useState } from "react"
const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

return ( 

<nav className="flex justify-between items-center p-4">
<div className="flex items-center">
  <img className="h-10" src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="" />
</div>
<div className="flex-1 flex justify-center items-center">
  <input className="w-1/2 mx-4" type="search" placeholder=" 🔎 Search..." />
</div>
<div className="flex space-x-4 items-center">
  {isLoggedIn ? (
    <>
      <Link href="/create-post">
        <button className="px-4 py-2 border text-[#1d4ed8] border-[#1d4ed8] rounded hover:bg-[#1d4ed8] hover:text-white">Create Post</button>
      </Link>
      <div>
        <LogoutButton/>
      </div>
      <div className="relative">
        <img className="h-5 w-10" src="data:image/jpeg;base64,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" alt="icono de campana " />
      </div>
      <div className="ml-4 relative">
        <div className="w-10 h-10 bg-gray-400 rounded-full overflow-hidden">
          <img src="https://api.dicebear.com/9.x/identicon/svg?seed=S" alt="User imagen" className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  ) : (
    <>
      <Link href="/LoginPage">
        <button className="hover:text-[#1d4ed8] hover:underline">Log in</button>
      </Link>
      <Link href="/CreateAccountPage">
        <button className="px-4 py-2 border text-[#1d4ed8] border-[#1d4ed8] rounded hover:bg-[#1d4ed8] hover:text-white">Create Account</button>
      </Link>
    </>
  )}
</div>
</nav>
)
}

export default Navbar