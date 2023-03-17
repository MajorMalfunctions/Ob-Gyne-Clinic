import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import Hero from '../components/Hero/Hero';
import Contact from '../assets/images/contact.png';
import ContactUs from  '../pages/Contact/Contact';

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
      <Hero
        cName="hero-mid"
        heroImg={Contact}
        title="Contact Me"
        btnClass="hide"
      />
      <ContactUs />
    </>
  )
}

export default ContactMe;