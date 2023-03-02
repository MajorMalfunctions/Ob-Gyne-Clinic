import api from "./api";
import TokenService from "./token.service";

const register = (fullname, email, password) => {
  return api.post("/auth/signup", {
    fullname,
    email,
    password
  });
};

const login = (email, password) => {
  return api
    .post("/auth/signin", {
      email,
      password
    })
    .then((response) => {
      if (response.data.accessToken) {
        TokenService.setUser(response.data);
      }

      return response.data;
    });
};

const logout = () => {
  TokenService.removeUser();
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;

// import api from "./api";
// import TokenService from "./token.service";

// class AuthService {
//   login(email, password) {
//     return api
//       .post("/auth/signin", {
//         email,
//         password
//       })
//       .then(response => {
//         if (response.data.accessToken) {
//           TokenService.setUser(response.data);
//         }

//         return response.data;
//       });
//   }

//   logout() {
//     TokenService.removeUser();
//   }

//   register(fullname, email, password) {
//     return api.post("/auth/signup", {
//       fullname,
//       email,
//       password
//     });
//   }
// }

// export default new AuthService();