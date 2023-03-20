import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import Hero from '../components/Hero/Hero';
import Contact from '../assets/images/contact.png';
import ContactUs from  '../pages/Contact/Contact';

import Navbar from  '../components/Navbar/Navbar';
import Footer from  '../components/Footer/Footer';

const ContactMe = () => {
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
        heroImg={Contact}
        title="Contact Me"
        btnClass="hide"
      />
      <ContactUs />
      <Footer />
    </>
  )
}

export default ContactMe;