import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";

export default function Header({ plcaeholder }) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4">
      <div className="container">
        <div className="flex justify-between gap-4 relative">
          <Link href="/" className="relative flex items-center w-[150px] min-w-[100px] h-10 my-auto">
            <Image src={"https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"} alt="Logo Image"
              className="object-contain object-left" fill />
          </Link>
          <div className="hidden lg:block flex-1">
            <SearchBar placeholder={plcaeholder} />
          </div>
          <Navbar />
        </div>
        <div className="lg:hidden">
          <SearchBar placeholder={plcaeholder} />
        </div>
      </div>
    </header>
  )
}
