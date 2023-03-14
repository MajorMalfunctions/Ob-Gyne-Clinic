import React from 'react'
import {Link} from 'react-router-dom'
import { Data } from  './BlogData';

const Blog = () => {
  return (
    <div className="blogs">
      <div className= "posts">
        {Data.map(blog=>(
          <div className="post" key= {blog.id}>
            <div className="img">
              <img src={blog.image} alt=""/>
            </div>
            <div className="content">
              <Link className="Link" to={`/blog/${blog.id}`}>
              </Link>
              <h1>{blog.title}</h1>
              <p>{blog.description} + {blog.date}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog;