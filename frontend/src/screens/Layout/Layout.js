import React from 'react'
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

import Admin from "../Admin";
import Moderator from "../Moderator";
import Patient from "../Patient";

// import Booking from '../../components/Booking/Booking';
// import AddBooking from '../../components/Booking/AddBooking';
// import BookingList from '../../components/Booking/BookingList';

// import Blog from '../../components/Blog/Blog';
// import AddBlog from '../../components/Blog/AddBlog';
// import BlogList from '../../components/Blog/BlogList';

export default function Layout() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
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

          {/* <Route exact path={["/", "/booking"]} element={<BookingList />} />
          <Route exact path="/add" element={<AddBooking />} />
          <Route path="/booking/:id" element={<Booking />} /> */}

          {/* <Route exact path={["/", "/blog"]} element={<BlogList />} />
          <Route exact path="/add" element={<AddBlog />} />
          <Route path="/blog/:id" element={<Blog />} /> */}


        </Routes>
      <ToastContainer />
    </>
  )
}