import React from 'react'

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Contact from '../assets/images/contact.png';
import ContactUs from  '../pages/Contact/Contact';
import Footer from '../components/Footer/Footer';

const ContactMe = () => {
  return (
    <>
      <Header />
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