import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import history from "./history";
import "./i18n/i18n";

ReactDOM.render(
  <React.StrictMode>
    <Router history={history} basename={process.env.PUBLIC_URL}>
    {/*we use Suspense when the chosen language is still loading from the server */}
      <Suspense fallback={<h1>Loading...</h1>}>
        <App />
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
