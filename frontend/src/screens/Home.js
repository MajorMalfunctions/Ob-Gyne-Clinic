import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import Hero from '../components/Hero/Hero';
import Experience from '../components/Experience/Experience';
import Destination from '../components/Destination/Destination';
import Trip from '../components/Recent/Trip';
import Footer from '../components/Footer/Footer';
import Testimonials from '../components/Testimonials/Testimonial';
import ScrollUp from '../components/ScrollUp/ScrollUp';
import Navbar from '../components/Navbar/Navbar';
import Faq from '../components/Faq/Faq';
import Consult from '../components/Consult/Consult';
import '../styles/hero.css';

const Home = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem('accessToken')
  //    if(!token){
  //      navigate("/login");
  //    }
  // }, [])

  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/flagged/photo-1551049215-23fd6d2ac3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
        title="Caring Women's Health & Wellness For All Stages Of Life"
        text="Fellow, Philippine Obstetrical and Gynecological Society"
        buttonText="Online Consultation"
        url="/book"
        btnClass="show"
      />
      <br />
      <Consult />
      <Experience />
      <Destination />
      <Trip />
      <Testimonials />
      <Faq />
      <ScrollUp />
      <Footer />
    </>
  )
}

export default Home;