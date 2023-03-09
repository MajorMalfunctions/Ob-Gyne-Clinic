import { Route, Navigate, Redirect } from 'react-router-dom';

function PrivateRoutes({ children, isAuthenticated, ...rest }) {

  return (
    <Route
      {...rest}
      render={
        ({ location }) => (
          isAuthenticated
            ? (
              children
            ) : (
              <Navigate
                to={{
                  pathname: '/login',
                  state: { from: location }
                }}
              />
            ))
      }
    />
  );
}

export default PrivateRoutes;