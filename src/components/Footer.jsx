import React from 'react'
import { FaLinkedin, FaGithub} from 'react-icons/fa'
function Footer() {
  return (
    <>
    <footer className="py-12">
        <div className="max-w-screen-1xl container mx-auto px-2 md:px-15">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <FaLinkedin size={24}/>
              <FaGithub size={24} />
            </div>
            <div className="mt-1 border-t border-gray-700 pt-1 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
              <p className="text-sm">Supportive Partner ❤️ Arti</p>
            </div>
          </div>
        </div>
      </footer>
    </>
    
  )
}

export default Footer