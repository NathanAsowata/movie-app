import Image from "next/image"
import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="px-5 md:px-10 py-2 bg-slate-900">
        <Link href={"/"}>
        <Image 
            src={"/icon.png"} 
            alt={"Movie app logo"} 
            width={50}
            height={50}
            className="shadow shadow-white"
            />
        </Link>
    </nav>
  )
}

export default NavBar