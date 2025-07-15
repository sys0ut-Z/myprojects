import React, { useEffect, useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") === "dark" ? "dark" : "light")

  const htmlElement = document.documentElement;

  useEffect(() => {
    if(theme === "dark"){
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    else{
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    // console.log(theme)
  }, [theme]);

  return (
    <div className='relative flex justify-center items-center rounded-full'>
      <MdDarkMode size={20} className={`${theme === "dark" ? "opacity-0" : "opacity-100"} cursor-pointer transition-all duration-300`}
        onClick={() => setTheme(theme === "dark" ? "dark" : "light")}
      />  
      <MdLightMode size={20} className={`absolute ${theme === "dark" ? "opacity-100" : "opacity-0"}
      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 text-white`} 
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </div>
  )
}

export default DarkMode