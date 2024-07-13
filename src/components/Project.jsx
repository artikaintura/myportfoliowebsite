import React from 'react';

function Project() {
  const cardItem = [
    {
      title: "PortFolio",
      img:"/assests/images/portfolio.jpg",
      desc:"I have designed and developed a dynamic portfolio website using React.js, Tailwind CSS, MongoDB, and Express.",
      link: [
        ""
      ],
    },
    {
      title: "Chat App",
      img:"/assests/images/chat.jpg",
      desc: "I have designed a real-time chat application enabling useds to send and receive messages using Reactjs, Nodejs, MongoDB, Expressjs",
      link: [
        "https://github.com/artikaintura/CHATAPP"
      ],
    },
    {
      title: "Bat Ball & Stump",
      img:"/assests/images/cric.webp",
      desc: "I have designed a dynamic web project 'Bat, Ball, and Stump' using HTML, CSS, and JavaScript.",
      link: [
        "https://github.com/artikaintura/Bat-Ball-Stump"
      ],
    },
    {
      title: "Weather App",
      img:"/assests/images/weather.jpeg",
      desc:"I have designed a Weather application that provides real-time weather updates for any location.",
      link: [
        "https://github.com/artikaintura/Weatherapp"
      ],
    },
    {
      title: "Calculator",
      img:"/assests/images/cal.webp",
      desc: "I have designed a robust and interactive Calculator application using Reactjs.",
      link: [
        "https://github.com/artikaintura/Calculator"
      ],
    },
    {
      title: "Curd Operation",
      img:"/assests/images/crud.jpg",
      desc: "I have designed a dynamic web application CRUD using HTML, CSS, Js ",
      link: [
        "https://github.com/artikaintura/crud-operations"
      ],
    },

  ];


  return (
    <>
      <div name="Projects" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10'>
        <h1 className='text-3xl font-bold mb-5'>My<span className='text-red-700'> Projects</span></h1>

        <div className=' grid grid-cols-1 md:grid-cols-4 gap-8 p-4'>
          {
            cardItem.map(({ title, desc, link, img }) => {
              return (
                <React.Fragment>
                  <div className='bg-blue-100 border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-110 duration-300'>
                 <div className="px-1 py-1 font-bold text-xl mb-2">
                 <img src={img} alt={title} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' />
                  
                  </div>
                    <div className="px-2 font-bold text-xl mb-2">
                      {title}
                    </div>
                    <div className="px-1 mb-1" >
                      <p className='text-justify'>{desc}</p>
                    </div>
                    <div className=" px-2 py-4 space-x-3 justify-around">
                      <button onClick={() => window.open(link, "_blank", "noopener noreferrer")}
                        className="bg-gradient-to-r from-pink-400 to-purple-300 hover:from-blue-400 hover:to-purple-400 text-white font-bold px-4 py-2 rounded">
                        Source Code
                      </button>
                    </div>

                  </div>

                </React.Fragment>
              );
            })
          }

        </div>

      </div>
    </>
  );
}

export default Project;
