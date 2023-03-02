import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import About from "../About";
import Home from "../Home";
import Service from "../Service";
import Contact from "../Contact";

import Login from "../Login";
import Signup from "../Signup";
import Dashboard from "../Dashboard";
import NotFound from "../NotFound";

export default function Layout() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
     </Routes>
    </BrowserRouter>
  )
}