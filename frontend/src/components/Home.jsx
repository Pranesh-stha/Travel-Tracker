import React from "react";
import Map from "./Map";
import Panel from "./Panel";

function App({ onLogout, username }) {
  const [fullNames, setFullNames] = React.useState([]);
  const [refreshKey, setRefreshKey] = React.useState(0);

  function triggerRefresh() {
    setRefreshKey((k) => k + 1);
  }

  return (
    <div className="app-layout">
      <Map
        username={username}
        setFullNames={setFullNames}
        refreshKey={refreshKey}
      />
      <Panel
        onLogout={onLogout}
        username={username}
        fullNames={fullNames}
        triggerRefresh={triggerRefresh}
      />
    </div>
  );
}

export default App;
