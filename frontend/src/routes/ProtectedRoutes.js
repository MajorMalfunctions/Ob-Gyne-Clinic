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

export default ProtectedRoute;

// import React from 'react'
// import { Outlet, Navigate } from 'react-router-dom'

// const useAuth = () => {
//     const user = localStorage.getItem('user')
//     if(user) {
//         return true
//     } else {
//         return false
//     }
// }

// const ProtectedRoutes = ({props:any}) => {

//     const auth =  useAuth()

//     return auth ? <Outlet /> : <Navigate to="/login" />
// }

// export default ProtectedRoutes;

// import React from 'react'
// import { Navigate } from 'react-router-dom'

// function Protected({ isLoggedIn, children }) {
//   if (!isLoggedIn) {
//     return <Navigate to="/" replace />
//   }
//   return children
// }
// export default Protected