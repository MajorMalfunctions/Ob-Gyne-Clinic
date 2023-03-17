import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import Hero from '../components/Hero/Hero';
import AboutMe from '../assets/images/about.jpg';
import AboutUs from '../pages/About/AboutUs';

import '../styles/hero.css'
import '../styles/about.css';

function About () {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
     if(!token){
       navigate("/");
     }
 }, [])


  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={AboutMe}
        title="About Me"
        btnClass="hide"
      />
      <AboutUs />
    </>
  )
}

export default About;