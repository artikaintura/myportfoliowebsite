import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";


function Home() {
    return (
        <>
            <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <h1 className='text-xl'>Hey, I'm <span className='text-red-700'>Arti.</span></h1>
                        <div className='flex space-x-1 text-2xl md:text-4xl '>
                            <ReactTyped className='text-red-700 font-bold'
                                strings={["Fresher", "Developer"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <br />
                        <p className='text-1xl md:text-md text-justify'>
                            Welcome to My PortFolio!  I'm a web developer passionate about creating 
                            innovative and dynamic websites. I love learning new things every day and 
                            continuously enhancing my skills.
                        </p>
                        <br />
                        <br />
                        <br />
                        {/*Social Media Icon */}
                        <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-1'>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Available On</h1>
                                <ul className='flex space-x-5'>
                                    <li >
                                        <a href="https://github.com/artikaintura" target="_blank" rel="noopener noreferrer">
                                            <FaGithub className='bg-gradient-to-r from-pink-300 to-purple-200 hover:from-purple-400 hover:to-pink-400 rounded-md border border-purple-900 text-3xl cursor-pointer' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/arti-kaintura-9b8931227/" target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin className='bg-gradient-to-r from-pink-300 to-purple-200 hover:from-purple-400 hover:to-pink-400 rounded-md border border-purple-900  text-3xl cursor-pointer' />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Currently Working On</h1>
                                <ul className='flex space-x-5'>
                                    <li >
                                        <RiReactjsLine className='bg-gradient-to-r from-pink-300 to-purple-200 hover:from-purple-400 hover:to-pink-400 rounded-md border border-purple-900 text-3xl cursor-pointer' />
                                    </li>
                                    <li>
                                        <SiExpress className='bg-gradient-to-r from-pink-300 to-purple-200 hover:from-purple-400 hover:to-pink-400 rounded-md border border-purple-900  text-3xl cursor-pointer' />
                                    </li>
                                    <li>
                                        <IoLogoNodejs className='bg-gradient-to-r from-pink-300 to-purple-200 hover:from-purple-400 hover:to-pink-400 rounded-md border border-purple-900  text-3xl cursor-pointer' />
                                    </li>
                                    <li>
                                        <DiMongodb className='bg-gradient-to-r from-pink-300 to-purple-200 hover:from-purple-400 hover:to-pink-400 rounded-md border border-purple-900  text-3xl cursor-pointer' />
                                    </li>

                                </ul>


                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
                        <img
                            src="/assests/images/photo1.jpg"
                            className=' rounded-full md:w-[450px] md:h-[450px]'
                            alt="" />
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Home