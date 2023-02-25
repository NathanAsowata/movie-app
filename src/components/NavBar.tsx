import Image from "next/image"
import Link from "next/link"
import SearchBar from "./SearchBar"

const NavBar = () => {
  return (
    <nav className="px-5 md:px-10 py-2 bg-slate-900 fixed z-10 w-screen flex justify-between items-center">
        <Link href={"/"}>
        <Image 
            src={"/icon.png"} 
            alt={"Movie app logo"} 
            width={50}
            height={50}
            className="shadow shadow-white"
            />
        </Link>
        <SearchBar />
    </nav>
  )
}

export default NavBar