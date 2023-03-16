import React from "react";
import Category from '../components/Category/Category'
import Card from '../components/Card/Card'

import Navbar from '../components/Navbar/Navbar'
// import Footer from '../components/Footer/Footer'

const Blog = () => {
  return (
    <>
      <Navbar />
      <Category />
      <Card />
      {/* <Footer /> */}
    </>
  )
}

export default Blog;
