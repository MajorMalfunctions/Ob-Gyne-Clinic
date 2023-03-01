import React from 'react'
import { Routes, Route } from 'react-router-dom'

import About from "../About";
import Home from "../Home";
import Service from "../Service";
import Contact from "../Contact";

import Login from "../Login";

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