import React from 'react'
import { ReactTyped } from "react-typed";


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
                        <div className='flex flex-col items-center md:flex-row justify-between space-x-7 space-y-7 md:space-y-1'>
                            <div className='space-y-2 space-x-3'>
                                <h1 className='font-bold'>Available On</h1>
                                <ul className='flex space-x-2'>
                                    <li >
                                        <a href="https://github.com/artikaintura" target="_blank" rel="noopener noreferrer">
                                        <img src='/assests/images/github.png' className="w-9 h-9 object-cover rounded-lg hover:scale-110 shadow-md" alt="React JS Logo" /> </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/arti-kaintura-9b8931227/" target="_blank" rel="noopener noreferrer">
                                        <img src='/assests/images/linkedIn.png' className="w-8 h-8 object-cover rounded-lg  hover:scale-110 shadow-md" alt="React JS Logo" />
                                          </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='space-y-2 space-x-3'>
                                <h1 className='font-bold'>Currently Working On</h1>
                                <ul className='flex space-x-2'>
                                    <li >
                                        <img src='/assests/images/reactjs.png' className="w-8 h-8 object-cover rounded-lg hover:scale-110 shadow-md" alt="React JS Logo" />
                                    </li>
                                    <li>
                                        <img src='/assests/images/express.png' className="w-9 h-9 object-cover rounded-lg hover:scale-110 shadow-md" alt="React JS Logo" />
                                    </li>
                                    <li>
                                        <img src='/assests/images/mongodb.jpg' className="w-9 h-9 object-cover rounded-lg hover:scale-110 shadow-md" alt="React JS Logo" />
                                    </li>
                                    <li>
                                        <img src='/assests/images/nodejs.png' className="w-8 h-8 object-cover rounded-lg hover:scale-110 shadow-md" alt="React JS Logo" />
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