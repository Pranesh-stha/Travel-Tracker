import React from "react";
import LogoutIcon from '@material-ui/icons/ExitToApp'


function Login( {onLogout, username} ) {
  return (
    <div className="login-section">
      <div className="login-item">
        <span className="login-text">{username.toUpperCase()}</span>
        <button className="logout-btn" title="Logout" onClick={onLogout}>
          <LogoutIcon />
        </button>
      </div>
    </div>
  );
}

export default Login;
