import api from "./api";
import authHeader from './auth-header';

const getPublicContent = () => {
  return api.get("/test/all");
};

const getUserBoard = () => {
  return api.get("/test/user");
};

const getModeratorBoard = () => {
  return api.get("/test/mod");
};

const getAdminBoard = () => {
  return api.get("/test/admin");
};

const login = (email, password) => {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
  };

  return fetch('/users/authenticate', requestOptions)
      .then(response => {
          if (!response.ok) {
              return Promise.reject(response.statusText);
          }
          return response.json();
      })
      .then(user => {
          if (user && user.token) {
              localStorage.setItem('user', JSON.stringify(user));
          }
          return user;
      });
}

const logout = () => {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

const getAll = () => {
  const requestOptions = {
      method: 'GET',
      headers: authHeader()
  };

  return fetch('/users', requestOptions).then(handleResponse);
}

const register = (user) => {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
  };

  return fetch('/auth/signup', requestOptions).then(handleResponse);
}

const update = (user) =>  {
  const requestOptions = {
      method: 'PUT',
      headers: { ...authHeader(), 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
  };

  return fetch('/updatePatient/:id' + user.id, requestOptions).then(handleResponse);;
}

const _delete = (_id) => {
  const requestOptions = {
      method: 'DELETE',
      headers: authHeader()
  };

  return fetch('/deletePatient/:id' + _id, requestOptions).then(handleResponse);;
}

function handleResponse(response) {
  if (!response.ok) {
      return Promise.reject(response.statusText);
  }

  return response.json();
}

const UserService = {
  handleResponse,
  delete: _delete,
  register,
  update,
  login,
  logout,
  getAll,
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default UserService;

// import api from './api';

// class UserService {
//   getPublicContent() {
//     return api.get('/test/all');
//   }

//   getPatientBoard() {
//     return api.get('/test/patient');
//   }

//   getModeratorBoard() {
//     return api.get('/test/mod');
//   }

//   getAdminBoard() {
//     return api.get('/test/admin');
//   }
// }

// export default new UserService();