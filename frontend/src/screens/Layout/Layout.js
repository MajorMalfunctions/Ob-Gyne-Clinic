import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import About from "../About";
import Home from "../Home";
import Service from "../Service";
import Contact from "../Contact";

import Login from "../Login";
import Register from "../Register";
import Forgot from "../Forgot";
import Reset from "../Reset";
import Dashboard from "../Dashboard";
import NotFound from "../NotFound";

export default function Layout() {
  return (
    <>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/reset-password/:resetToken" element={<Reset />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <ToastContainer />
    </>
  )
}