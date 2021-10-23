import {Route, Redirect} from "react-router-dom";

export default function PrivateRoute({ children, username, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        username ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}