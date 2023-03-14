import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ path, exact, children }) => {
  const auth = useSelector((store) => store.authenticated);

  return auth ? (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  ) : (
    <Navigate to="/home" />
  );
};

// export default ProtectedRoute;
// import React, { children } from 'react'
// import { Navigate } from 'react-router-dom'

// function Protected({ isLoggedIn, children }) {
//   if (!isLoggedIn) {
//     return <Navigate to="/" replace />
//   }
//   return children
// }

// export default Protected;