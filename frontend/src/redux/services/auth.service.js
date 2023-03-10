import axios from "axios";

const API_URL = "http://localhost:5050/api/auth/";

const register = (fullname, email, password) => {
  return axios.post(API_URL + "signup", {
    fullname,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        localStorage.setItem('roles', response.data.roles);
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('isAuthenticated', true);
      }

      return response.data;
    });
};

const logout = () => {
  return axios.post(API_URL + "logout", {

    // localStorage.removeItem("user");
    // window.location.reload();
  });
  localStorage.clear();
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

// const getCurrentUser = () => {
//   return JSON.parse(localStorage.getItem("user"));
// };

export default {
  register,
  login,
  logout,
  getCurrentUser
};