import React from 'react'

import Header from '../header/Header';
import Hero from '../Hero/Hero';
import Destination from '../destination/Destination';

function Home () {
  return (
    <>
      <Header />
      <Hero
        cName="hero"
        heroImg="https://img.freepik.com/premium-photo/mother-newborn-child-birth-maternity-hospital-mom-hugging-her-newborn-baby-after-delivery_494619-222.jpg"
        title="Your Journey Start Here"
        text="Offers Best Birthing Plan"
        buttonText="Book Consultation"
        url="/"
        btnClass="show"
      />
      <Destination />
    </>
  )
}

export default Home;