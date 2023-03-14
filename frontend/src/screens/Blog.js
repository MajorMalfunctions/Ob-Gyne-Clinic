import React from 'react'
import Category from '../components/Category/Category'
import Card from '../components/Card/Card'
// import Navbar from '../components/Navbar/Navbar'
import TopBar from '../components/TopBar/TopBar';


const Blog = () => {
  return (
    <>
      <TopBar />
      {/* <Navbar /> */}
      <Category />
      <Card />
    </>
  )
}

export default Blog
