import React from 'react'
import Main from './main/main'
import Searchbar from './searchbar/Searchbar'
import Service from './services/Service'
import Feature from './features/Feature'
import About from './about/About'
import Testimonial from './testimonial/Testimonial'

const Home = () => {
  return (
    <div>
      <Main/>
      <Searchbar/>
      <Service/>
      <Feature/>
      <About/>
      <Testimonial/>
    </div>
  )
}

export default Home
