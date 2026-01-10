import React from 'react'
import './Hero.css'
import abhi_logo from '../../assets/abhi_logo.jpg'

const Hero = () => {
  const scrollToContact = () => {
    document
      .getElementById('contact')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="hero">
      <img src={abhi_logo} alt="abhijith logo" />
      <h1>
        <span>I'm Abhijith M,</span> Full Stack Developer
      </h1>

      <div className="hero-action">
        <button className="hero-connect" onClick={scrollToContact}>
          Connect With Me
        </button>

        <a href="/Resume.pdf" download className="hero-resume">
          My Resume
        </a>
      </div>
    </div>
  )
}

export default Hero
