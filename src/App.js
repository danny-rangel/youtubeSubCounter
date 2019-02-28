import React, { useState } from "react";

import "./App.css";
import useSubCount from "./useSubCount";


const App = () => {
  const [username, setUsername] = useState("Pewdiepie");

  const onInputChange = event => {
    setUsername(event.target.value);
  };
  
  return (
    <div className="App">
      <div className="header">
        Youtube Live Sub Counter
      </div>
      <div className="content">
        <form>
          <input
            className="usernameInput"
            type="text"
            onChange={onInputChange}
            value={username}
          />
        </form>
        <div className="info">
          {useSubCount(username)}
        </div>
      </div>
    </div>
  );
}


export default App;
