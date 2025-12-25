import React from "react";
import Header from "./Header";
import Login from "./Login";

function Panel( {onLogout, username} ) {
  const[userInput, setUserInput] = React.useState("")
  function handleChange(event){
    setUserInput(event.target.value)
    
  }

  function handleClick(){
    console.log(userInput)
  }

  return (
    <div className="right-panel">
      <Header />

      <div className="input-section">
        <input
          type="text"
          name="country"
          placeholder="Enter country name"
          autoFocus
          value={userInput}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleClick}>Add Country</button>
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

      <Login onLogout={onLogout} username={username}/>
    </div>
  );
}

export default Panel;
