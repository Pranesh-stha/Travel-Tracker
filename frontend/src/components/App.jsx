import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./Home";
import LoginPage from "./LoginPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  function renderLoginPage() {
    if (isLoggedIn) {
      return <Redirect to="/home" />;
    }
    return <LoginPage onLogin={handleLogin} />;
  }

  function renderHomePage() {
    if (!isLoggedIn) {
      return <Redirect to="/login" />;
    }
    return <Home onLogout={handleLogout} />;
  }

  function renderRootRedirect() {
    return <Redirect to={isLoggedIn ? "/home" : "/login"} />;
  }

  return (
    <Router>
      <Switch>

        <Route path="/login" render={renderLoginPage} />

        <Route path="/home" render={renderHomePage} />

        <Route path="/" render={renderRootRedirect} />

      </Switch>
    </Router>
  );
}

export default App;
