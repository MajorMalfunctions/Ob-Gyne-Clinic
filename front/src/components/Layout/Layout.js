import React from 'react'
import { Routes, Route } from 'react-router-dom'

import About from "../Screens/About";
import Home from "../Screens/Home";
import Service from "../Screens/Service";
import Contact from "../Screens/Contact";

import Login from "../Screens/Login";

export default function Layout() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
     </Routes>
    </>
  )
}