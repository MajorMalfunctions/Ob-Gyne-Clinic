import React, { useState } from "react"
import "./create.css"
import { IoIosAddCircleOutline } from "react-icons/io"
import Spinner from "../../utils/Spinner";

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
        setIsLoading(false);
        console.log(data);
      })
      .catch(e => {
        console.log(e);
        setIsLoading(false);
      });
  };

  const newBlog = () => {
    setBlog(initialBlogState);
    setSubmitted(false);
  };

  return (
    <div className="blog_container">
      <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newBlog}>
            Add
          </button>
        </div>
      ) : (
        <div>

        <div className="form-group">
            <label htmlFor="title">Cover</label>
            <input
              type="file"
              className="form-control"
              id="cover"
              required
              value={blog.cover}
              onChange={handleInputChange}
              name="cover"
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="title"
              className="form-control"
              id="title"
              required
              value={blog.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              required
              value={blog.category}
              onChange={handleInputChange}
              name="category"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              className="form-control"
              id="description"
              required
              value={blog.description}
              onChange={handleInputChange}
              name="description"
              textarea/>
          </div>

          <div className="button-wrapper">
            <button onClick={saveBlog} disabled={isLoading} className="button-blog">
              <span> {isLoading ? <Spinner /> : 'Create'} </span>
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Create;