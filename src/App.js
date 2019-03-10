import React, { useState } from "react";

import youtube from './youtube';
import "./App.css";
import useSubCount from "./useSubCount";


const App = () => {
  const [id, setID] = useState("UC-lHJZR3Gqxm24_Vd_AJ5Yw");
  const [username, setUsername] = useState("");

  const fetchID = async username => {
    const response = await youtube.get("/search", {
      params: {
        part: 'snippet',
        id,
        q: username,
        type: 'channel',
        maxResults: 2
      }
    });

    const { data } = response;
    if (data.pageInfo.totalResults !== 0) {
      setID(data.items[0].id.channelId);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchID(username);
  }

  const onInputChange = event => {
    setUsername(event.target.value);
  };


  return (
    <div className="App">
      <div className="header">
        Youtube Live Sub Counter
      </div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <input
            className="usernameInput"
            type="text"
            onChange={onInputChange}
            value={username}
            placeholder="Search by Channel or ID"
          />
        </form>
        <div className="info">
          {useSubCount(id)}
        </div>
      </div>
    </div>
  );
}


export default App;
