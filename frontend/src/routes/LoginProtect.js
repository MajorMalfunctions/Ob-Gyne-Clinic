import React, { children } from 'react'
import { Navigate } from 'react-router-dom'

function LoginProtected({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />
  }
  return children
}

export default LoginProtected;