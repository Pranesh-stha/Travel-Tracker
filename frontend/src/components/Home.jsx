import React from "react";
import Map from "./Map";
import Panel from "./Panel";

function App( {onLogout} ) {
  return (
    <div className="app-layout">
      <Map />
      <Panel onLogout={onLogout} />
    </div>
  );
}

export default App;
