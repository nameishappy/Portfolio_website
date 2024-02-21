import React from 'react'
import Navbar from './components/Navbar'

import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <div className='mb-30'>
      <Navbar/>
      </div>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
