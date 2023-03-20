import React, { useState } from "react"
import "./create.css"
import { IoIosAddCircleOutline } from "react-icons/io"

import { useDispatch } from "react-redux";
import { createBlog } from "../../redux/actions/blog";

const Create = () => {
  const initialBlogState = {
    id: null,
    title: "",
    category: "",
    description: "",
    cover: "",
    published: false
  };

  const [ blog, setBlog ] =  useState(initialBlogState);
  const [ submitted, setSubmitted ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setBlog({ ...blog, [name]: value });
  };

    const saveBlog = () => {
    const { title, category, cover, description } = blog;

    dispatch(createBlog(title, category, cover, description))
      .then(data => {
        setBlog({
          id: data.id,
          title: data.title,
          category: data.category,
          description: data.description,
          cover: data.cover,
          published: data.published
        });
        setSubmitted(true);
        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newBlog = () => {
    setBlog(initialBlogState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
          {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newBlog}>
            Add
          </button>
        </div>
      ) : (
      <section className='newPost'>
        <div className='container boxItems'>
          <div className='img '>
            <img src='https://images.pexels.com/photos/6424244/pexels-photo-6424244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='image' class='image-preview' />
          </div>
          <form className="blog_form">
            <div className='inputFile flexCenter'>
              <input value={blog.cover} onClick={handleInputChange} type='file' accept='image/*' alt='img' />
            </div>
              <label>Title</label>
              <br />
              <input value={blog.title} onClick={handleInputChange} type='text' placeholder='Title' />
            <br />
            <label>Description</label>
            <br />
            <input value={blog.description} onClick={handleInputChange} type='text-area' placeholder='Description' />
            {/* <textarea name='' id='' cols='30' rows='10'></textarea> */}
              <br />
            <button onClick={saveBlog} className='button'>Create Blog</button>
          </form>
        </div>
      </section>
      )}
    </div>
  )
}

export default Create;