import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBlog } from "../../redux/actions/blog";

const AddBlog1 = () => {
  const initialBlogState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [ blog, setBlog ] = useState(initialBlogState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setBlog({ ...blog, [name]: value });
  };

  const saveBlog = () => {
    const { title, description } = blog;

    dispatch(createBlog(title, description))
      .then(data => {
        setBlog({
          id: data.id,
          title: data.title,
          description: data.description,
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
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={blog.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={blog.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <button onClick={saveBlog} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddBlog1;