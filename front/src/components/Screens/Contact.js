import React from 'react'

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Contact from '../../assets/images/contact.png';
import ContactUs from  '../Contact/Contact';
import Footer from '../Footer/Footer';

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