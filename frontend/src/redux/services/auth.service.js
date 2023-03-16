import axios from "axios";

const API_URL = "http://localhost:5050/api/auth/";

const register = (fullname, email, password) => {
  return axios.post(API_URL + "signup", {
    fullname,
    email,
    password,
  });
};

const login = (email, password, cover, ip) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
      cover,
      ip
    })
    .then((resp) => {
      if (resp.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(resp.data));
        localStorage.setItem('accessToken', resp.data.accessToken);
        localStorage.setItem('refreshToken', resp.data.refreshToken);
        localStorage.setItem('roles', resp.data.roles);
        sessionStorage.setItem("name", resp.name);
        sessionStorage.setItem("name", resp.data.name);
        sessionStorage.setItem("user", JSON.stringify(resp.data));
        console.log(resp.message);
        // localStorage.setItem('isLoggedin', resp.data.isLoggedin);
        // localStorage.setItem('isAuth', resp.data.isAuth);
        // localStorage.setItem('isAuthenticated', resp.data.isAuthenticated);
      }

      return resp.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.clear();
  sessionStorage.removeItem("user");
  sessionStorage.clear();
};

// const logout = () => {
//   return axios
//     .post(API_URL + "logout", {
//     })
//     .then((resp) => {
//       localStorage.clear();
//       console.log(resp.data);
//       console.log(resp.status);
//       console.log(resp.message);
//       return resp.data;
//   });
// };

// const logout = () => {
//   return axios.post(API_URL + "logout", {
//     // localStorage.removeItem("user");
//     // window.location.reload();
//   });
//   localStorage.clear();
// };

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