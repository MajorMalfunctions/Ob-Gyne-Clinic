import React from 'react'

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Service from '../assets/images/service.jpg';

import '../styles/services.css';
import Footer from '../components/Footer/Footer';
import ServiceArea from '../pages/Services/Services';

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