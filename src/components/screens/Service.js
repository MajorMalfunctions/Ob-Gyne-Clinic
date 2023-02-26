import React from 'react'

import Header from '../header/Header';
import Hero from '../Hero/Hero';
import Service from '../../assets/images/services.jpg';

import '../../styles/service.css';
import Footer from '../footer/Footer';

function Services () {
  return (
    <>
      <Header />
      <Hero
        cName="hero-mid"
        heroImg={Service}
        title="Offered Services"
        btnClass="hide"
      />
      <Footer />
    </>
  )
}

export default Services;