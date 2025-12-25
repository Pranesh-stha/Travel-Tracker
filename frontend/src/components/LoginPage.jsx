import React from "react";
import axios from "axios";

function LoginPage({ onLogin }) {
  const [userInfo, setUserInfo] = React.useState({
    username: "",
    password: "",
  });

  const [pwStatus, setPwStatus] = React.useState(true);

  function cUserInfo(event) {
    const { name, value } = event.target;

    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleClick() {
    const response = await axios.post(
      "http://localhost:5000/pwcheck",
      userInfo
    );
    setPwStatus(response.data);
    if (response.data) {
      onLogin(userInfo.username);
    }

    console.log(userInfo);
  }

  return (
    <div className="tt-login-root">
      <div className="tt-login-container">
        <h1 className="tt-login-title">Login</h1>

        <form className="tt-login-form">
          <div className="tt-login-group">
            <label className="tt-login-label">Username</label>
            <input
              type="text"
              className="tt-login-input"
              placeholder="Enter your username"
              name="username"
              value={userInfo.username}
              onChange={cUserInfo}
            />
          </div>

          <div className="tt-login-group">
            <label className="tt-login-label">Password</label>
            <input
              type="password"
              className="tt-login-input"
              placeholder="Enter your password"
              name="password"
              value={userInfo.password}
              onChange={cUserInfo}
            />
            <p className="tt-login-error">{pwStatus ? "" : "Wrong password"}</p>
          </div>

          <button
            type="button"
            className="tt-login-button"
            onClick={handleClick}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
