import React from 'react'

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import AboutMe from '../../assets/images/about.jpg';
import AboutUs from '../About/AboutUs';
import '../../styles/hero.css'

import '../../styles/about.css';

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