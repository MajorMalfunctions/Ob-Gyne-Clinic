import React, { children } from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({ children, user, isLoggedIn }) => {
    const token = localStorage.getItem("accessToken");
    // if(!user)  {
    //     return <Navigate to='/' />;
    // }

    if (!token) {
        return <Navigate to="/" />
    }

    // if (!isLoggedIn) {
    //   return isLoggedIn ? <Outlet /> : <Navigate to="/" replace  />
    // }

  return children;
}

export default Protected;