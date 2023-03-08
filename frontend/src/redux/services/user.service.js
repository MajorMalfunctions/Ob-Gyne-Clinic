import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5050/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getPatientBoard = () => {
  return axios.get(API_URL + "patient", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "moderator", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getPatientBoard,
  getModeratorBoard,
  getAdminBoard,
};