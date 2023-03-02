import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.1.193:5050/api/v1",
  headers: {
    "Content-Type": "application/json",
    // "x-access-token, Accept"
  },
});

export default instance;
