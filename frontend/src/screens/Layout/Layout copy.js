import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import About from "./screens/About";
import Home from "./screens/Home";
import Service from "./screens/Service";
import Contact from "./screens/Contact";

import Login from "./screens/Login";
import Register from "./screens/Register";
import Profile from "./screens/Profile";
import Forgot from "./screens/Forgot";
import Reset from "./screens/Reset";
import Dashboard from "./screens/Dashboard";
import NotFound from "./screens/NotFound";

import AuthService from "./redux/services/auth.service";

export default function Layout() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    //   setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
    //   setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
    }, []);

    const logOut = () => {
        AuthService.logout();
    };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/reset-password/:resetToken" element={<Reset />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
