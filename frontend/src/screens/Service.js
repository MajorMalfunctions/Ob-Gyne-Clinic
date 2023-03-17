import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import Hero from '../components/Hero/Hero';
import img from '../assets/images/service.jpg';

import '../styles/services.css';
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
      <Hero
        cName="hero-mid"
        heroImg={img}
        title="Offered Services"
        btnClass="hide"
      />
      <Service />
      <ServiceArea />
    </>
  )
}

export default Services;