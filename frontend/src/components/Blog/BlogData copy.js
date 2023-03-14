import React from 'react'
import {Link} from 'react-router-dom'
import BlogData from  './Blog';

const Blog = () => {
  return (
    <div className="blog">
      <div className= "posts">
        {BlogData.map(post=>(
          <div className="post" key= {post.id}>
            <div className="img">
              <img src={post.img} alt=""/>
            </div>
            <div className="content">
              <Link className="Link" to={`/post/${post.id}`}>
              </Link>
              <h1>{post.title}</h1>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog;