import React from 'react'
import { Routes, Route } from 'react-router-dom'

import About from "../screens/About";
import Home from "../screens/Home";
import Service from "../screens/Service";
import Contact from "../screens/Contact";
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function Layout() {
  return (
    <>
    <Header />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
     </Routes>
     <Footer />
    </>
  )
}