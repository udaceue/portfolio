import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {FiTwitter, FiFacebook, FiGithub, FiLinkedin} from 'react-icons/fi'
import Icon from './Icon';

function Main() {
  return (
    <div id="main">
        <img src='https://images.unsplash.com/photo-1476525223214-c31ff100e1ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        alt='background'
        className='h-screen w-full object-cover scale-x-[-1]'
        />
        <div className='w-full h-screen bg-white/40 absolute top-0 left-0'>
            <div className='flex flex-col w-full h-full justify-center items-center font-semibold text-4xl text-cyan-800'>
                <h1>I'm Udaceue</h1>
                <h2>I'm</h2>
                <h3>
                    <TypeAnimation
                        sequence={[
                            'Developer', // Types 'One'
                            1000, // Waits 1s
                            'Martial-arts fan', // Deletes 'One' and types 'Two'
                            2000, // Waits 2s
                            'Gamer',
                            2000 // Types 'Three' without deleting 'Two'
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '1em', paddingLeft: "5px" }}
                        />
                </h3>
                <div className='flex gap-6 mt-6 border-2 border-teal-800 border-opacity-40 p-3 '>
                    <Icon icon={<FiFacebook />} href='https://www.facebook.com/remigiusz.szostak.1' />
                    <Icon icon={<FiGithub />} href='https://github.com/udaceue' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main