import React from 'react'

import Header from '../header/Header';
import Hero from '../Hero/Hero';
import AboutMe from '../../assets/images/about.jpg';

import '../../styles/about.css';

function About () {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={AboutMe}
        title="About Me"
        btnClass="hide"
      />
      <Header />
    </>
  )
}

export default About;