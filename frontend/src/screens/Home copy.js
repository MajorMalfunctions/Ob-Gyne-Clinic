import React from 'react'
// import { useNavigate } from "react-router-dom";

import Hero from '../components/Hero/Hero';
import Experience from '../components/Experience/Experience';
import Recent from '../components/Recent/Recent';
import Testimonials from '../components/Testimonials/Testimonial';
import Testimonial from '../components/Testimonial/Testimonial';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import Slider from '../components/Slider/HeroSlider';

import Faq from '../components/Faq/Faq';
import '../styles/hero.css';
import Landing from '../components/Landing/Landing';

const Home = () => {
  // const navigate = useNavigate();

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
        buttonText="Online Booking"
        url="/booking/create"
        // url="/consult"
        btnClass="show"
      />

      {/* <Slider
        cName="hero"
        heroImg="https://images.unsplash.com/flagged/photo-1551049215-23fd6d2ac3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
          title="Caring Women's Health & Wellness For All Stages Of Life"
          text="Fellow, Philippine Obstetrical and Gynecological Society"
          buttonText="Online Booking"
          url="/booking/create"
          // url="/consult"
          btnClass="show"
      /> */}
      {/* <Slider /> */}
      <Landing />
      <Experience />
      <Recent />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  )
}

export default Home;