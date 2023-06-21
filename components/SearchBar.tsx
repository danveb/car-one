"use client"

import { useState } from "react";
import { SearchManufacturer } from "@/components";


export default function SearchBar() {
  // useState
  const [manufacturer, setManufacturer] = useState(""); 

  // handleSearch 
  const handleSearch = () => {
    
  }; 

  return (
    <form 
      className="searchbar"
      onSubmit={handleSearch}
    >
      <div className="searchbar__item">
        {/* autocomplete box for manufacturers */}
        <SearchManufacturer 
          manufacturer={manufacturer}
          setManufacturer={setManufacturer} 
        />
        {/* autocomplete box for models */}
      </div>
    </form>
  )
}