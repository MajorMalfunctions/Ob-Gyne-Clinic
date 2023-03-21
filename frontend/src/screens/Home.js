import React from 'react'
import '../styles/hero.css';
import { Fade } from "react-awesome-reveal";

import Hero from '../components/Hero/Hero';
import Experience from '../components/Experience/Experience';
import Recent from '../components/Recent/Recent';
import Testimonials from '../components/Testimonials/Testimonial';
import Testimonial from '../components/Testimonial/Testimonial';
import Faq from '../components/Faq/Faq';
import Counter from '../components/Counter/Counter';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Slider from '../components/Slider/HeroSlider';

import Landing from '../components/Landing/Landing';
import AnimatedPage from './AnimatedPage';

const Home = () => {

  return (
    <div id="my-scrollbar">
      <Fade top distance="10%" duration={100}>
      <AnimatedPage>
        <Navbar />
        <Landing
          cName="hero"
          heroVid="../assets/video/videoBg.mp4"
          title="Caring Women's Health & Wellness For All Stages Of Life"
          text="Fellow, Philippine Obstetrical and Gynecological Society"
          buttonText="Online Booking"
          url="/booking/create"
          btnClass="show"
        />
        <Experience />
        <Recent />
        <Testimonials />
        <Counter />
        <Faq />
        <Footer />
      </AnimatedPage>
      </Fade>
    </div>
  )
}

export default Home;