import React from 'react'
function About() {
    return (
        <>
            <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
                <h1 className='text-3xl font-bold mb-5'>About <span className='text-red-700'>Me</span></h1>
                <p className='text-1xl md:text-md text-justify'>
                    I'm a computer Science student a passionate and dedicated aspiring software developer with a strong foundation in web development and programming.
                    As a recently completed my masters, I have honed my skills in HTML, CSS, JavaScript, React, Node.js, and Python through various academic projects and personal
                    endeavors. My journey in the tech world has been driven by a curiosity for how things work and a desire to create solutions that can make a difference.
                    In my portfolio, you'll find projects that showcase my ability to build dynamic and responsive web applications, including a real-time chat application
                    and a weather app etc. These projects reflect my commitment to learning and my ability to apply theoretical knowledge to practical scenarios.
                    I'm excited to continue growing my skill set and to contribute to innovative projects in a professional setting.
                </p>
                <br />
                <button className="bg-gradient-to-r from-pink-400 to-purple-300 hover:from-blue-400 hover:to-purple-400 rounded-md border border-pink-700 text-white font-bold py-2 px-4" >
                    <a href="/assests/Arti Kaintura.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
                </button>
            </div>
            <hr />
        </>
    )
}

export default About