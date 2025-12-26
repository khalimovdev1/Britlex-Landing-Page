import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Skill from './Components/Skills/Skill'
import About from './Components/About/About'
import Pricing from './Components/Pricing/Pricing'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      {/* All components */}
      <Navbar/>
      <Hero/>
      <Skill/>
      <About/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
