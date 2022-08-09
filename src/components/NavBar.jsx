import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch ,AiFillHome,AiOutlineWhatsApp,AiOutlineShoppingCart} from 'react-icons/ai'
import {FaUserFriends} from 'react-icons/fa'
const NavBar = () => {
    const [nav, setNav] = useState(false)
    return (
        //main div..
        <div className='flex items-center justify-between max-w-[1040px] p-4 mx-auto'>
            {/* Title code */}
            <div className='flex items-center'>
                <AiOutlineMenu size={30}
                    className="cursor-pointer"
                    onClick={() => setNav(!nav)} />
                <h1 className='text-2xl sm:text-3xl lg:4xl px-2 cursor-pointer'> Cool <span className='font-bold text-orange-500'>Cakes</span></h1>
            </div>
            {/* search box */}
            <div className='bg-gray-200 flex rounded-full items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25} />
                <input type="text"
                    placeholder='Search Cakes...'
                    className='bg-transparent p-2 focus:outline-none w-full' />
            </div>
            {/*  signup / login buttons */}
            <button className='bg-black/80 text-white rounded-full py-2 px-2 md:flex  hover:bg-white hover:text-black duration-300'>Signup</button>

            {/* mobile responsive design goes here... */}
            {nav ? <div className='bg-white/80 w-full h-screen fixed z-10 top-0 left-0'></div> : ''}
            {/* using menu button to close and open the side bar (vise versa) */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 scrool-smooth' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 scrool-smooth'}>
                <AiOutlineClose size={25}
                    className="absolute right-4 top-4 cursor-pointer text-black"
                    onClick={() => setNav(!nav)} />
                <h2 className='text-2xl sm:text-3xl lg:4xl px-2 cursor-pointer p-4'>Cool <span className='font-bold text-orange-500'>Cakes</span></h2>

                <nav>
                    <ul className='flex flex-col p-4 text-orange-500'>
                        <li className='text-xl py-4 flex'><AiFillHome size={30} className="mr-4"/> Home</li>
                        <li className='text-xl py-4  flex'> <AiOutlineShoppingCart size={30} className="mr-3"/> cart</li>
                        <li className='text-xl py-4  flex'><AiOutlineWhatsApp  size={30} className="mr-3"/>Customer Support</li>
                        <li className='text-xl py-4  flex'> <FaUserFriends size={30} className="mr-3"/> About</li>
                        
                    </ul>
                </nav>
            </div>
            
        </div>
        

    )
}

export default NavBar;