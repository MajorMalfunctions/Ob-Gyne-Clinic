// import axios from "../../utils/axios";
import axios from "axios";
const API_URL = "http://localhost:5050/api/booking/";


const getAll = () => {
  return axios.get(API_URL + "findAll");
};

const get = id => {
  return axios.get(API_URL + "/:id");
};

const create = data => {
  return axios.post(API_URL + "/create", data);
};

const update = (id, data) => {
  return axios.put(API_URL + "/:id", data);
};

const remove = id => {
  return axios.delete(API_URL + "/:id");
};

const removeAll = () => {
  return axios.delete(API_URL + "/:id");
};

// const findByTitle = title => {
//   return axios.get(`/tutorials?title=${title}`);
// };

const BookingService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
//   findByTitle
};

export default BookingService;