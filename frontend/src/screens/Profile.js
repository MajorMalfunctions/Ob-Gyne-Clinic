import React from "react";
import { useNavigate, Navigate, Link } from 'react-router-dom';
import '../styles/profile.css';

import { useDispatch, useSelector } from "react-redux";

// import SliderHero from "../components/HeroSlider/SliderHero";

import { logout } from "../redux/actions/auth";

const Profile = () => {
  const navigate = useNavigate();

  const { user: currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  const user = useSelector((state) => state.auth);

  const handleSignOut = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
    navigate('/');
  };

  if (!currentUser) {
    return <Navigate to="/" />;
  };

  return (
    <>
    {/* <SliderHero /> */}
          <div className="container">
          <br />
      <br />
      <br />
      <br />
      <header className="jumbotron">
        <h2>
          Welcome: <strong>{currentUser.name}</strong>
        </h2>

        <div>
            <img src={currentUser.cover} alt="profile" />
        </div>

      
      
      </header>
      <br />
      <p>
        <strong>Access Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>

      {/* <p>
        <strong>Token:</strong> {currentUser.accessToken}
      </p> */}

      <p>
        <strong>Refresh Token:</strong> {currentUser.refreshToken}
      </p>

      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>

      <div className="jumbotron">
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
      </div>

      <p>
        <strong>User IP:</strong> {currentUser.ip}
      </p>

      <p>
        <strong>User Verified:</strong> {currentUser.isVerified}
      </p>

        <button className="logs" onClick={handleLogout}>Logout</button>

        <button
                  edge="end"
                  color="inherit"
                  // className={classes.authButton}
                  onClick={() => handleSignOut()}
                >
                  <Link to="/">
                    SignOut
                  </Link>
        </button>

    </div>
    </>
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