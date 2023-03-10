import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import '../styles/dashboard.css';

import { logout } from "../redux/actions/auth";
import { clearMessage } from "../redux/actions/message";

const Dashboard = () => {
  const navigate = useNavigate()

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
    navigate('/');
  }

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);


  // useEffect(() => {
  //   const token = localStorage.getItem('accessToken')
  //    if(!token){
  //      navigate("/");
  //    }
  // }, [])

  return (
    <div className="dashboard-container">
      <div className="sidebar_container">
        <div className="sidebar">
            <div className="lines_icon">
              <i class="fa fa-bars" aria-hidden="true"></i>
            </div>

            <div className="profile">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3304/3304567.png"
                alt="profile"
              />
            </div>

            <div className="groups">
              <div className="group">
                  <h3> Analytics </h3>
              </div>
            </div>
        </div>
      </div>


      <div className="body_container">
        <h2>BODY</h2>
        <button onClick={logOut}>Logout1</button>
        <button onClick={handleLogout}>Logout2</button>
      </div>
    </div>
  )
}

export default Dashboard

      {/* <h1>Welcome To Dashboard</h1>
      <button onClick={handleLogout}>Logout</button> */}






// import { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";

// const Dashboard = () => {
//   const [ authenticated, setAuthenticated ] = useState(null);

// useEffect(() => {
//   const loggedInUser = localStorage.getItem("authenticated");
//   if (loggedInUser) {
//     setAuthenticated(loggedInUser);
//     }
//   }, []);

//   if (!authenticated) {
//     return <Navigate replace to="/dashboard" />;
//   } else {
//   return (
//     <div>
//         <h2>Welcome to Dashboard</h2>
//     </div>
//     );
//   }
// };

// export default Dashboard;
