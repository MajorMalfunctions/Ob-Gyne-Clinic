import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateBlog, deleteBlog } from "../../redux/actions/blog";
import BlogService from "../../redux/services/blog.service";

const Blog1 = (props) => {
  const initialBlogState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [currentBlog, setCurrentBlog] = useState(initialBlogState);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

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
    getBlog(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentBlog({ ...currentBlog, [name]: value });
  };

  const updateStatus = status => {
    const data = {
      id: currentBlog.id,
      title: currentBlog.title,
      description: currentBlog.description,
      published: status
    };

    dispatch(updateBlog(currentBlog.id, data))
      .then(response => {
        console.log(response);

        setCurrentBlog({ ...currentBlog, published: status });
        setMessage("The status was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateContent = () => {
    dispatch(updateBlog(currentBlog.id, currentBlog))
      .then(response => {
        console.log(response);

        setMessage("The Blog Was Updated Successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const removeBlog = () => {
    dispatch(deleteBlog(currentBlog.id))
      .then(() => {
        props.history.push("/blogs");
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
              <label>
                <strong>Status:</strong>
              </label>
              {currentBlog.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentBlog.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateStatus(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateStatus(true)}
            >
              Publish
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={removeBlog}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateContent}
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

export default Blog1;