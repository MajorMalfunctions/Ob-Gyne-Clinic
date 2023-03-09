import React from "react";
import { useNavigate, Navigate, useEffect } from 'react-router-dom';
import { useSelector } from "react-redux";

import Navbar from "../components/Navbar/Navbar";
import '../styles/profile.css';

const Profile = () => {
  const navigate = useNavigate();

  const { user: currentUser } = useSelector((state) => state.auth);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
    // localStorage.removeItem('user')
    navigate('/');
  };

  if (!currentUser) {
    return <Navigate to="/" />;
  };

  return (
    <div className="container">
      <Navbar />
          <br />
      <br />
      <br />
      <br />
      <header className="jumbotron">
        <h3>
          Welcome: <strong>{currentUser.name}</strong>
        </h3>
      </header>
      <br />
      <br />
      <br />
      <br />
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>

      <p>
        <strong>Refresh Token:</strong> {currentUser.refreshToken.substring(0, 20)} ...{" "}
        {currentUser.refreshToken.substr(currentUser.refreshToken.length - 20)}
      </p>

      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>

      <p>
        <strong>isLoggedIn:</strong> {currentUser.isLoggedIn}
      </p>

      <p>
        <strong>Authenticated:</strong> {currentUser.isAuthenticated}
      </p>

        <button onClick={handleLogout}>Logout</button>

    </div>
  );
};

export default Profile;




// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// import { userActions } from '../_actions';

// function Profile () {
//     const users = useSelector(state => state.users);
//     const user = useSelector(state => state.authentication.user);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(userActions.getAll());
//     }, []);

//     function handleDeleteUser(id) {
//         dispatch(userActions.delete(id));
//     }

//     return (
//         <div className="col-lg-8 offset-lg-2">
//             <h1>Hi {user.firstName}!</h1>
//             <p>You're logged in with React Hooks!!</p>
//             <h3>All registered users:</h3>
//             {users.loading && <em>Loading users...</em>}
//             {users.error && <span className="text-danger">ERROR: {users.error}</span>}
//             {users.items &&
//                 <ul>
//                     {users.items.map((user, index) =>
//                         <li key={user.id}>
//                             {user.firstName + ' ' + user.lastName}
//                             {
//                                 user.deleting ? <em> - Deleting...</em>
//                                 : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
//                                 : <span> - <a onClick={() => handleDeleteUser(user.id)} className="text-primary">Delete</a></span>
//                             }
//                         </li>
//                     )}
//                 </ul>
//             }
//             <p>
//                 <Link to="/login">Logout</Link>
//             </p>
//         </div>
//     );
// }

// export { Profile }