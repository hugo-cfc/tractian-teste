import React from "react";
import { Router } from "react-router-dom";

import Routes from "./routes";
import history from "./history";

import { AuthProvider } from "./Context/AuthContext";

import GlobalStyle from "./globalStyle";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router history={history}>
          <Routes />
        </Router>
      </AuthProvider>
      <GlobalStyle />
    </div>
  );
}

export default App;
