import React from "react";
import Map from "./Map";
import Panel from "./Panel";

function App( {onLogout, username} ) {
  const [fullNames, setFullNames] = React.useState([]);

  return (
    <div className="app-layout" >
      <Map username={username} setFullNames={setFullNames}/>
      <Panel onLogout={onLogout} username={username} fullNames={fullNames}/>
    </div>
  );
}

export default App;
