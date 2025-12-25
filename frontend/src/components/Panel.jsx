import React from "react";
import Header from "./Header";
import Login from "./Login";

function Panel( {onLogout} ) {
  return (
    <div className="right-panel">
      <Header />

      <div className="input-section">
        <input
          type="text"
          name="country"
          placeholder="Enter country name"
          autoFocus
        />
        <button type="submit">Add Country</button>
      </div>

      <div className="country-list-section">
        <h2>
          Visited Countries
          <span className="country-count">1</span>
        </h2>
        <ul className="country-list">
          <li className="country-item">
            <span className="country-name">France</span>
            <button className="remove-btn">Remove</button>
          </li>
        </ul>
      </div>

      <Login onLogout={onLogout}/>
    </div>
  );
}

export default Panel;
