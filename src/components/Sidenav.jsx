import React, { useState } from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {GrProjects, GrContact} from "react-icons/gr"
import {FaHome} from "react-icons/fa"
import {AiFillProject, AiOutlineProject} from "react-icons/ai"
import {SiResurrectionremixos} from "react-icons/si"

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
            <div className='fixed w-full h-screen bg-slate-600 flex flex-col items-center justify-center z-20 md:hidden'>
                <a href='#main' className='w-[75%] p-4 m-2 flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaHome size={20}/>
                    <span className='pl-4'>Home</span>
                </a>
                
                <a href='#work' className='w-[75%] p-4 m-2 flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <GrProjects size={20}/>
                    <span className='pl-4'>work</span>
                </a>
                
                <a href='#projects' className='w-[75%] p-4 m-2 flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiFillProject size={20}/>
                    <span className='pl-4'>Projects</span>
                </a>

                <a href='#cv' className='w-[75%] p-4 m-2 flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <SiResurrectionremixos size={20}/>
                    <span className='pl-4'>Resume</span>
                </a>
                
                <a href='#contact' className='w-[75%] p-4 m-2 flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <GrContact size={20}/>
                    <span className='pl-4'>Contact</span>
                </a>

            </div>
        )
        ):
        (
            (
                ""
            )
        )}
        
        <div className='hidden md:block fixed top-[25%] z-10'>
            <div className='flex flex-col rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easy-in duration-300'>
                <a href='#main'>
                    <FaHome size={20}/>
                </a>
            </div>
            <div className='flex flex-col rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easy-in duration-300'>
                <a href='#work'>
                    <GrProjects size={20}/>
                </a>
            </div>
            <div className='flex flex-col rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easy-in duration-300'>
                <a href='#Projects'>
                    <AiOutlineProject size={20}/>
                </a>
            </div>
            <div className='flex flex-col rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easy-in duration-300'>
                <a href='#cv'>
                    <SiResurrectionremixos size={20}/>
                </a>
            </div>
            <div className='flex flex-col rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easy-in duration-300'>
                <a href='#contact'>
                    <GrContact size={20}/>
                </a>
            </div>
        </div>

        
    </div>
  )
}

export default Sidenav