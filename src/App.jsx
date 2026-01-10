import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Serives/Services'
import Mywork from './Components/Mywork/Mywork'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

     

      <section id="work">
        <Mywork />
      </section>

      <section id="contact">
        <Contact />
      </section>

       <section id="services">
        <Services />
      </section>
    </div>
  )
}

export default App
