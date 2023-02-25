import React from 'react'

import Header from '../header/Header';
import Hero from '../Hero/Hero';
import Contact from '../../assets/images/contact.png';

const ContactMe = () => {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={Contact}
        title="Contact Me"
        btnClass="hide"
      />
      <Header />
    </>
  )
}

export default ContactMe;