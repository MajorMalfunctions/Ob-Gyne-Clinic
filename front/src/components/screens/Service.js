import React from 'react'

import Header from '../header/Header';
import Hero from '../Hero/Hero';
import Service from '../../assets/images/service.jpg';

import '../../styles/service.css';
import Footer from '../footer/Footer';
import ServiceArea from '../services/Services';

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
      <ServiceArea />
      <Footer />
    </>
  )
}

export default Services;