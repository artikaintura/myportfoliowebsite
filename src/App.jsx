import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills/Skills'
import Project from './components/Project'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
   <>
   <div>
   <Navbar />
   <Home />
   <About />
   <Skills />
   <Project />
   <Contact />
   <Footer />
   </div>
  <Toaster />
   </>
  )
}

export default App