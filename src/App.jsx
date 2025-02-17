import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cards from './components/Cards'
import Image from './components/Image'
import Explore from './components/Explore'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Cards/>
      <Image/>
      <Explore/>
      <Footer/>
    </div>
  )
}

export default App