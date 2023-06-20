"use client"

import Image from "next/image";
import { CustomButton } from "@/components"; 

export default function Hero() {
  const handleScroll = {}; 

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Find and book your next electric vehicle — quickly and hassle-free</h1>
        <p className="hero__subtitle">Streamline your car buying experience with CarOne.</p>
        <CustomButton 
          title="Explore Cars" 
          containerStyles="bg-cyan-600 text-white rounded-full mt-10"
          handleClick={() => handleScroll} 
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image 
            src="/hero-intro.png"
            alt="hero"
            fill 
            className="object-contain"
          />
        </div>
        {/* <div className="hero__image-overlay" /> */}
      </div>
    </div>
  )
}