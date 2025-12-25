import React from "react";

function LoginPage({ onLogin }) {
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
            />
          </div>

          <div className="tt-login-group">
            <label className="tt-login-label">Password</label>
            <input
              type="password"
              className="tt-login-input"
              placeholder="Enter your password"
            />
            <p className="tt-login-error">
              Wrong password
            </p>
          </div>

          <button
            type="button"
            className="tt-login-button"
            onClick={onLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
