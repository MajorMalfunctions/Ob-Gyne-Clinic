import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import img from '../assets/images/service.jpg';

import '../styles/services.css';
import Footer from '../components/Footer/Footer';
import Service from '../components/Services/Services';
import ServiceArea from '../pages/Services/Services';


function Services () {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
     if(!token){
       navigate("/");
     }
 }, [])

  return (
    <>
      <Header />
      <Hero
        cName="hero-mid"
        heroImg={img}
        title="Offered Services"
        btnClass="hide"
      />
      <Service />
      <ServiceArea />
      <Footer />
    </>
  )
}

export default Services;