import React from 'react'

import Header from '../header/Header';
import Hero from '../Hero/Hero';
import Contact from '../../assets/images/contact.png';
import ContactUs from  '../contact/Contact';
import Footer from '../footer/Footer';

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