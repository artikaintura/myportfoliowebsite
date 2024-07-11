import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
function Navbar() {
    const [menu, setMenu] = useState(false);
    const navItems = [
        {
            id: 1,
            text: "Home",
        },
        {
            id: 2,
            text: "About",
        },
        {
            id: 3,
            text: "Skills",
        },
        {
            id: 4,
            text: "Projects",
        },
        {
            id: 5,
            text: "Contact",
        },
    ]

    return (
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white'>
            <div className='flex justify-between item-center h-16'>
                <div className='flex space-x-2'>
                    <img src="/assests/images/photo.webp" className="h-12 w-12 rounded-full" alt="" />
                    <h1 className='font-semibold text-xl cursor-pointer'><span className='text-red-500 text-2xl'>A</span>rti
                        <p className='text-sm'>Kaintura</p>
                    </h1>
                </div>
                {/* desktop navbar */}
                <div>
                    <ul className='hidden md:flex space-x-8'>
                        {
                            navItems.map(({ id, text }) => (
                                <li
                                    className='hover:scale-105 duration-200 cursor-pointer'
                                    key={id}>
                                    <Link
                                        to={text}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        activeClass="active"
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div onClick={() => setMenu(!menu)} className='md:hidden'>
                        {menu ? <IoMenu size={24} /> : <IoClose size={24} />}
                    </div>
                </div>
            </div>

            {/* mobile navbar */}
            {
                menu && (
                    <div className='bg-white'>
                        <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-4 text-xl'>
                            {
                                navItems.map(({ id, text }) => (
                                    <li className='hover:scale-105 duration-200 font-semibold cursor-pointer'
                                        key={id}>
                                        <Link
                                        onClick={() => setMenu(!menu)} 
                                            to={text}
                                            smooth={true}
                                            duration={500}
                                            offset={-70}
                                            activeClass="active"
                                        >
                                            {text}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                )
            }
        </div>
    )
}

export default Navbar
