import React, { useState } from 'react'
import { Routes, Route,  Navigate, BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import About from "../About";
import Home from "../Home";
import Service from "../Service";
import Contact from "../Contact";
// import Blog from "../../components/Blogag/Blog";

import Login from "../Login";
import Register from "../Register";
import Profile from "../Profile";
import Forgot from "../Forgot";
import Reset from "../Reset";
import Dashboard from "../Dashboard";
import NotFound from "../NotFound";

import Protected from '../../routes/Protected';

export default function Layout() {
  return (
    <>
        <Routes>
          <Route exact path="/home" element={
            <Protected>
              <Home />
            </Protected>
          }/>

          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/reset-password/:resetToken" element={<Reset />} />

          <Route path="/Profile" element={
            <Protected>
              <Profile />
            </Protected>
          } />

          <Route path="/dashboard" element={
              <Protected>
                <Dashboard />
              </Protected>
            } />

          <Route
            path="/dashboard"
            element={
              <Protected>
                <Dashboard />
              </Protected>
            } />

          <Route path="*" element={<NotFound />} />
        </Routes>
      <ToastContainer />
    </>
  )
}