import React from 'react'

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Service from '../../assets/images/service.jpg';

import '../../styles/service.css';
import Footer from '../Footer/Footer';
import ServiceArea from '../Services/Services';

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