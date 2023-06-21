// CustomButton component will is reusable
// we'll receive a title (type "string") as props 
// to display custom text

// by default all Next.js components are server-side-rendered components
// this means if we want interactivity (using react hooks) in our component, we'll make it a client-side component with "use client" keyword

"use client"

import { CustomButtonProps } from "@/types";
import Image from "next/image"; 

export default function CustomButton({ title, containerStyles, handleClick, btnType, textStyles, rightIcon, isDisabled }: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={() => handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image 
            src={rightIcon}
            alt="rightIcon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  )
}