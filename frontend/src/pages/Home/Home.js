import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import Hero from '../components/Hero/Hero';
import Destination from '../components/Destination/Destination';
import Trip from '../components/Recent/Trip';
import Footer from '../components/Footer/Footer';
import Testimonials from '../components/Testimonials/Testimonial';
import Navbar from '../components/Navbar/Navbar';
import Faq from '../components/Faq/Faq';
import '../styles/hero.css';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
     if(!token){
       navigate("/");
     }
 }, [])

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
      <Faq />
      <Footer />
    </>
  )
}

export default Home;