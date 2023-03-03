import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const [authenticated, setAuthenticated] = useState(null);

useEffect(() => {
  const loggedInUser = localStorage.getItem("authenticated");
  if (loggedInUser) {
    setAuthenticated(loggedInUser);
    }
  }, []);

  if (!authenticated) {
    // Redirect
    return <Navigate replace to="/" />;
  } else {
  return (
    <div>
        <h2>Welcome to Dashboard</h2>
    </div>
    );
  }
};

export default Dashboard;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getUser, removeUserSession } from '../utils/common';
 
// const Dashboard = props => {
//   const history = useNavigate();
//   const user = getUser();
 
//   // handle click event of logout button
//   const handleLogout = () => {
//     removeUserSession();
//     history('/login');
//   }
 
//   return (
//     <div>
//       Welcome {user.name}!<br /><br />
//       <input type="button" onClick={handleLogout} value="Logout" />
//     </div>
//   );
// }
 
// export default Dashboard;