import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './About'
import Eye from './Components/Eye';
import Feature from './Components/Feature';
import Cards from './Components/Cards'
import Footer from './Components/Footer';
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
    <div className="w-full h-screen bg-zinc-900 text-white">
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eye/>
      <Feature/>
      <Cards/>
      <Footer/>
    </div>
    </>
  )
}

export default App
