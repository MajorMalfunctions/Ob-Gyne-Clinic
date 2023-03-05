import React from 'react'

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import AboutMe from '../assets/images/about.jpg';
import AboutUs from '../pages/About/AboutUs';

import '../styles/hero.css'
import '../styles/about.css';

function About () {
  return (
    <>
      <Header />
      <Hero
        cName="hero-mid"
        heroImg={AboutMe}
        title="About Me"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  )
}

export default About;