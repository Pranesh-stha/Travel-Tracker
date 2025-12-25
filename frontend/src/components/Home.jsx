import React from "react";
import Map from "./Map";
import Panel from "./Panel";

function App( {onLogout, username} ) {
  return (
    <div className="app-layout">
      <Map />
      <Panel onLogout={onLogout} username={username}/>
    </div>
  );
}

export default App;
