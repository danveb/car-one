import Link from "next/link"; 
import Image from "next/image"; 

import CustomButton from "./CustomButton";

export default function Navbar() {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-h-16 max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-black">
        <Link
          href="/"
          className="flex justify-center items-center"
        >
          <Image 
            src="/logo-alt.png" /* logo-alt -> bg-black */ 
            alt="car one logo"
            width={120}
            height={20}
            className="object-contain"
          />
        </Link>
        <CustomButton 
          title="Sign In"
          btnType="button"
          containerStyles="text-white rounded-full bg-gray-800 min-w-[130px]"
        />
      </nav>
    </header>
  )
}