import React from 'react'
import { Routes, Route,  Navigate, BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import About from "../About";
import Home from "../Home";
import Service from "../Service";
import Contact from "../Contact";
import Blog from "../Blog";

import Login from "../Login";
import Register from "../Register";
import Profile from "../Profile";
import Forgot from "../Forgot";
import Reset from "../Reset";
import Dashboard from "../Dashboard";
import NotFound from "../NotFound";

import Admin from "../Admin";
import Moderator from "../Moderator";
import Patient from "../Patient";


export default function Layout() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} auth={true} />
          <Route path="/moderator" element={<Moderator />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/reset-password/:resetToken" element={<Reset />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <ToastContainer />
    </>
  )
}