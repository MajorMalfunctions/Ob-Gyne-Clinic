import React from 'react'

import Header from '../header/Header';
import Hero from '../Hero/Hero';
import Destination from '../destination/Destination';
import Trip from '../trip/Trip';
// import Footer from '../footer/Footer';

function Home () {
  return (
    <>
      <Header />
      <Hero
        cName="hero"
        heroImg="https://tomato.sg/wp-content/uploads/Newborn-Photoshoot-Singapore-1.jpg"
        title="Caring Women's Health & Wellness for all stages of life"
        text=" Center For Women's Health"
        buttonText="Book Consultation"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      {/* <Footer /> */}
    </>
  )
}

export default Home;