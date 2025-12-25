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
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [curretUser, steCurrentUser] = React.useState("Login")

  function handleLogin(loggedInUsername) {
    steCurrentUser(loggedInUsername);
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    steCurrentUser("Login");
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
    return <Home onLogout={handleLogout} username = {curretUser}/>;
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
