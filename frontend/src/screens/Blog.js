import React from "react";
import Category from '../pages/Blog/Category';
import Card from '../components/Card/Card';
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <Category />
        {/* <Link to="/blog/create">Create</Link> */}
      <Card />
    </>
  )
}

export default Blog;
