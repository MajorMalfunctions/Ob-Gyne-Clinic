import React from 'react'

import Header from '../header/Header';
import Hero from '../Hero/Hero';
import Service from '../../assets/images/services.jpg';

import '../../styles/service.css';

function Services () {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={Service}
        title="Offered Services"
        btnClass="hide"
      />
      <Header />
    </>
  )
}

export default Services;