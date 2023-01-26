import React, { useState } from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {FaHome} from "react-icons/fa"

function Sidenav() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const handleMenuToggle = () => {
      setToggleMenu(!toggleMenu)
    }

  return (
    <div>
        <GiHamburgerMenu className='text-xl z-[99] absolute top-4 right-4 md:hidden'
         onClick={handleMenuToggle}/>
        
        {toggleMenu?(
        (
            <div className='fixed w-full h-screen bg-slate-600 flex flex-col items-center'>
                <a href='#home' className='w-[75%] p-4 m-2 flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaHome size={20}/>
                    <span className='pl-4'>Home</span>
                </a>
            </div>
        )
        ):
        (
            (
                <div>Nie istnieje</div>
            )
        )}

        
    </div>
  )
}

export default Sidenav