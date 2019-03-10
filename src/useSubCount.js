import React, { useState, useEffect } from "react";
import numeral from 'numeral';

import youtube from "./youtube";
import useInterval from "./useInterval";

const useSubCount = id => {
  const [subCount, setSubCount] = useState(0);
  const [difference, setDifference] = useState(0);
  const [title, setTitle] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  useInterval(() => {
    fetchSubCount(id);
  }, 1000);

  const fetchSubCount = async id => {
    const response = await youtube.get("/channels", {
      params: {
        part: "snippet,contentDetails,statistics",
        id
      }
    });

    if (response.data.pageInfo.totalResults === 0) {
      setSubCount(0);
      setTitle("");
    } else {
      setDifference(
        response.data.items[0].statistics.subscriberCount - subCount
      );
      setSubCount(response.data.items[0].statistics.subscriberCount);
      setTitle(response.data.items[0].snippet.title);
      setThumbnail(response.data.items[0].snippet.thumbnails.medium.url)
    }
  };

  useEffect(() => {
    fetchSubCount(id);
  }, []);

  return (
    <div>
      <div className="title">
      {title ? `${title}` : null}
      </div>
      <div className="avatar">
        <img className="thumbnail" src={thumbnail} alt={title} ></img>
      </div>
      <div className="subCount">
        {title ? numeral(subCount).format('0,0'): null}
      </div>
      {title ? `subscribers`: null}
      <div className="difference" style={{ color: difference < 0 ? `red` : `limegreen` }}>
        {difference < 0 ? `${difference}` : `+${difference}`}
      </div>
    </div>
  );
};


export default useSubCount;
