import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useGetCurrentUser } from "../auth";
import SignIn from "../pages/signIn/SignIn";
import LoadingUser from "../components/LoadingUser";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const user = useGetCurrentUser();
  console.log(user);
  if (user === null)
    return (
      <div>
        <LoadingUser/>
      </div>
    );
  return (
    <Route
      {...rest}
      render={(props) =>
        !!user ? <RouteComponent {...props} /> : <Redirect to={"/sign-in"} />
      }
    />
  );
};

export default PrivateRoute;
