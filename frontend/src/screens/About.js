import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import Hero from '../components/Hero/Hero';
import AboutMe from '../assets/images/about.jpg';
import AboutUs from '../pages/About/AboutUs';

import '../styles/hero.css'
import '../styles/about.css';

import Navbar from  '../components/Navbar/Navbar';
import Footer from  '../components/Footer/Footer';

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
      <Navbar />
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