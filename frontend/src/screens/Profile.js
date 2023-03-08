import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.fullname}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
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
    </div>
  );
};

export default Profile;

// import React, { useState, useEffect } from 'react'

// import { useNavigate } from "react-router-dom";

// const Profile = () => {
//     const navigate = useNavigate()
//     const [user, setUser] = useState([])

//     const handleLogout = () => {
//         localStorage.removeItem('user')
//         localStorage.removeItem('accessToken')
//         localStorage.removeItem('refreshToken')
//         navigate("/login");
//         console.log('Logout Successfull')
//     }

//     return (
//         <div>
//             Welome {user.fullname}
//             <button onClick={handleLogout}>Logout</button>
//         </div>
//     )
// }



// export default Profile;






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