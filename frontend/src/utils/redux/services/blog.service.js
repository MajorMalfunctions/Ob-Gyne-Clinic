import axios from "axios";
const API_URL = "http://localhost:5050/api/blog";

const getAll = () => {
  return axios.get(API_URL + "/findAll");
};

const get = id => {
  return axios.get(API_URL + `/${id}`);
};

const create = data => {
  return axios.post(API_URL + "/create", data);
};

const update = (id, data) => {
  return axios.put(API_URL + `/${id}`, data);
};

const remove = id => {
  return axios.delete(API_URL + `/${id}`);
};

const removeAll = () => {
  return axios.delete(API_URL + "/blogs");
};

const findByTitle = title => {
  return axios.get(API_URL + "/published=true");
};

const BlogService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default BlogService;