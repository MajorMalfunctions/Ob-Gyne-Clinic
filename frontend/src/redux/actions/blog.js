import {
    CREATE_BLOG,
    RETRIEVE_BLOGS,
    UPDATE_BLOG,
    DELETE_BLOG,
    DELETE_ALL_BLOGS,
  } from "./types";

  import BlogService from "../services/blog.service";

  export const createBlog = (title, description) => async (dispatch) => {
    try {
      const res = await BlogService.create({ title, description });

      dispatch({
        type: CREATE_BLOG,
        payload: res.data,
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const retrieveBlogs = () => async (dispatch) => {
    try {
      const res = await BlogService.getAll();

      dispatch({
        type: RETRIEVE_BLOGS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const updateBlog = (id, data) => async (dispatch) => {
    try {
      const res = await BlogService.update(id, data);

      dispatch({
        type: UPDATE_BLOG,
        payload: data,
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const deleteBlog = (id) => async (dispatch) => {
    try {
      await BlogService.remove(id);

      dispatch({
        type: DELETE_BLOG,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const deleteAllBlogs = () => async (dispatch) => {
    try {
      const res = await BlogService.removeAll();

      dispatch({
        type: DELETE_ALL_BLOGS,
        payload: res.data,
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const findBlogsByTitle = (title) => async (dispatch) => {
    try {
      const res = await BlogService.findByTitle(title);

      dispatch({
        type: RETRIEVE_BLOGS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };