import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import BlogService from "../../redux/services/blog.service";

import "../../styles/blog.css";

const Blog = () => {
  const { id }= useParams();
  let navigate = useNavigate();

  const initialBlogState = {
    id: null,
    title: "",
    cover: "",
    date: "",
    description: "",
    published: false
  };
  const [currentBlog, setCurrentBlog] = useState(initialBlogState);
  const [message, setMessage] = useState("");

  const getBlog = id => {
    BlogService.get(id)
      .then(response => {
        setCurrentBlog(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getBlog(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentBlog({ ...currentBlog, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentBlog.id,
      title: currentBlog.title,
      cover: currentBlog.cover,
      date: currentBlog.date,
      description: currentBlog.description,
      published: status
    };

    BlogService.update(currentBlog.id, data)
      .then(response => {
        setCurrentBlog({ ...currentBlog, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateBlog = () => {
    BlogService.update(setCurrentBlog.id, setCurrentBlog)
      .then(response => {
        console.log(response.data);
        setMessage("The Blog was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteBlog = () => {
    BlogService.remove(currentBlog.id)
      .then(response => {
        console.log(response.data);
        navigate("/blogs");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentBlog ? (
        <div className="edit-form">
          <h4>Blog</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentBlog.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentBlog.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="cover">Cover:</label>
              <input
                type="upload"
                className="form-control"
                id="cover"
                name="cover"
                value={currentBlog.cover}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                className="form-control"
                id="date"
                name="date"
                value={currentBlog.date}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentBlog.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentBlog.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteBlog}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateBlog}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Blog...</p>
        </div>
      )}
    </div>
  );
};

export default Blog;