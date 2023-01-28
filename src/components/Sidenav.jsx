import React, { useState } from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {GrProjects, GrContact} from "react-icons/gr"
import {FaHome} from "react-icons/fa"
import {AiFillProject, AiOutlineProject} from "react-icons/ai"
import {SiResurrectionremixos} from "react-icons/si"
import cv from "../assets/cv.png"

function Sidenav() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const handleMenuToggle = () => {
      setToggleMenu(!toggleMenu)
    }


  return (
    <div>
        <GiHamburgerMenu className='text-xl z-[999] absolute top-4 right-4 cursor-pointer md:hidden'
         onClick={handleMenuToggle}/>
        {toggleMenu?(
        (
            <div className='fixed w-full h-screen bg-slate-600 flex flex-col items-center justify-center z-[99] md:hidden'>
                <a onClick={handleMenuToggle}  href='#main' className='w-[75%] p-4 m-2 flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaHome size={20}/>
                    <span className='pl-4'>Home</span>
                </a>
                
                <a onClick={handleMenuToggle} href='#work' className='w-[75%] p-4 m-2 flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <GrProjects size={20}/>
                    <span className='pl-4'>work</span>
                </a>
                
                <a onClick={handleMenuToggle} href='#projects' className='w-[75%] p-4 m-2 flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiFillProject size={20}/>
                    <span className='pl-4'>Projects</span>
                </a>

                <a onClick={handleMenuToggle} href={cv} download="Cv Remigiusz" target='_blank' className='w-[75%] p-4 m-2 flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <SiResurrectionremixos size={20}/>
                    <span className='pl-4'>Resume</span>
                </a>
                
                <a onClick={handleMenuToggle} href='#contact' className='w-[75%] p-4 m-2 flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300'>
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
        
        <div className='hidden md:block fixed top-[25%] z-[99]'>
                <a href='#main' className='block rounded-full'>
            <div className='flex flex-col rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easy-in duration-300'>
                    <FaHome size={20}/>
            </div>
                </a>

                <a href='#work' className='block rounded-full'>
            <div className='flex flex-col rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easy-in duration-300'>
                    <GrProjects size={20}/>
            </div>
                </a>

                <a href='#projects' className='block rounded-full'>
            <div className='flex flex-col rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easy-in duration-300'>
                    <AiOutlineProject size={20}/>
            </div>
                </a>

                <a href={cv} className='block rounded-full' download="Cv Remigiusz" target='_blank'>
            <div className='flex flex-col rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easy-in duration-300 relative'>
                    <div className='absolute w-36 top-0 h-full -left-6 bg-slate-300 text-white rounded-full z-[10] opacity-0 hover:opacity-70'>
                        <span className='block h-full max-w-max absolute left-16 p-4'>Resume</span>
                    </div>
                    <span className='z-20'>
                    <SiResurrectionremixos size={20}/>
                    </span>
            </div>
                </a>

                <a href='#contact' className='block rounded-full'>
            <div className='flex flex-col rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easy-in duration-300'>
                    <GrContact size={20}/>
            </div>
                </a>

        </div>

        
    </div>
  )
}

export default Sidenav