import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

import AnimatedLayout from './AnimatedLayout';

export default function Layout() {
  return (
    <>
      <Router>
        <AnimatedLayout />
      </Router>
    </>
  )
}