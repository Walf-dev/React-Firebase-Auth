import React, { useReducer, useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { UserContext, DispatchUserContext } from "./state/contexts/contexts";
import { useGetCurrentUser } from "./auth";
import reducer from "./state/reducer/reducer.js";
import { INITIAL_STATE } from "./state/initial_state.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./pages/dashboard/Dashboard";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import NotFound from "./pages/notFound/NotFound";
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import SignInWithEmailLink from './pages/signInWithEmailLink/SignInWithEmailLink';
import SendSignInEmailLink from './pages/sendSignInEmailLink/SendSignInEmailLink';
import {
  Popup,
} from "./components";




function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  console.log(state)
  const user = useGetCurrentUser();
  useEffect(() => {
    dispatch({ type: "GET_CURRENT_USER", payload: user });
  }, [user]);

  return (
    <UserContext.Provider value={state}>
      <DispatchUserContext.Provider value={dispatch}>
      <CssBaseline />
        <Popup />
      <Router basename="/">
      <React.Fragment>
        <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
          <Route exact path="/sign-In" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path= '/sign-in-with-email-link' component={SignInWithEmailLink} />
          <Route exact path="/send-sign-in-email-link" component={SendSignInEmailLink} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </React.Fragment>
    </Router>
      </DispatchUserContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
