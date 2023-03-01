import React from 'react'

import Hero from '../Hero/Hero';
import Destination from '../Destination/Destination';
import Trip from '../Trip/Trip';
import Footer from '../Footer/Footer';
import Testimonials from '../Testimonials/Testimonial';
import ScrollUp from '../ScrollUp/ScrollUp';
import Navbar from '../Navbar/Navbar';
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