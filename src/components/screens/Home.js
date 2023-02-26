import React from 'react'

import Header from '../header/Header';
import Hero from '../Hero/Hero';
import Destination from '../destination/Destination';
import Trip from '../trip/Trip';
import Footer from '../footer/Footer';

import BookForm from '../form/BookForm';

function Home () {
  return (
    <>
      <Header />
      <Hero
        cName="hero"
        heroImg="https://tomato.sg/wp-content/uploads/Newborn-Photoshoot-Singapore-1.jpg"
        title="Caring Women's Health & Wellness For All Stages Of Life"
        text=" Fellow, Philippine Obstetrical and Gynecological Society"
        buttonText="Book Consultation"
        url="/"
        btnClass="show"
      />
      <BookForm />
      <Destination />
      <Trip />
      <Footer />
    </>
  )
}

export default Home;