import { Route, Redirect } from 'react-router-dom';

  function PublicRoutes({ children, isAuthenticated, ...rest }) {
    return (
      <Route
        {...rest}
        render={
          ({ location }) => (
            !isAuthenticated ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: '/home',
                  state: { from: location }
                }}
              />
            ))
        }
      />
    );
  }

  export default PublicRoutes;