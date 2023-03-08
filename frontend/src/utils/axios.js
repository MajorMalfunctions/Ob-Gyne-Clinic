import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5050",
  // headers: {'Content-Type': 'x-access-token'},
  headers: {'Content-Type': 'application/json'}
  //   headers: {
  //   "Content-type": "application/json"
  // }
});