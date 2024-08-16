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
        <div className='container fixed top-0 left-0 right-0 z-50 h-16 px-4 mx-auto bg-white shadow-md max-w-screen-2xl md:px-20'>
            <div className='flex justify-between h-16 item-center'>
                <div className='flex space-x-2'>
                    <img src="/assests/images/photo.webp" className="w-12 h-12 rounded-full" alt="" />
                    <h1 className='text-xl font-semibold cursor-pointer'><span className='text-2xl text-red-500'>A</span>rti
                        <p className='text-sm'>Kaintura</p>
                    </h1>
                </div>
                {/* desktop navbar */}
                <div>
                    <ul className='hidden space-x-8 md:flex'>
                        {
                            navItems.map(({ id, text }) => (
                                <li
                                    className='duration-200 cursor-pointer hover:scale-105'
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
                        {menu ?<IoClose size={24}  />:<IoMenu size={24}/>}
                    </div>
                </div>
            </div>

            {/* mobile navbar */}
            {
                
                menu && (
                    <div className='bg-white'>
                        <ul className='flex flex-col items-center justify-center h-screen space-y-4 text-xl md:hidden'>
                            {
                                navItems.map(({ id, text }) => (
                                    <li className='font-semibold duration-200 cursor-pointer hover:scale-105'
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