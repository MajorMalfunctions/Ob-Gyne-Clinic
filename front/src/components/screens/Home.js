import React from 'react'

import Hero from '../Hero/Hero';
import Destination from '../destination/Destination';
import Trip from '../trip/Trip';
import Footer from '../footer/Footer';
import Testimonials from '../testimonials/Testimonial';
import ScrollUp from '../scrollUp/ScrollUp';
import Navbar from '../navbar/Navbar';
import '../../styles/hero.css';
function Home () {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://tomato.sg/wp-content/uploads/Newborn-Photoshoot-Singapore-1.jpg"
        title="Caring Women's Health & Wellness For All Stages Of Life"
        text="Fellow, Philippine Obstetrical and Gynecological Society"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Testimonials />
      <Footer />
      <ScrollUp />
    </>
  )
}

export default Home;