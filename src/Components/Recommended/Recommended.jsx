import React, { useEffect, useState } from "react";
import { API_KEY, value_converter } from "../../data";
import { Link } from "react-router-dom";

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
      await fetch(relatedVideo_url)
        .then((response) => response.json())
        .then((data) => setApiData(data.items));
    };
    fetchData();
  }, [categoryId]);

  return (
    <div className="recommended flexBasis_30">
      {apiData.map((item, i) => {
        return (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={i} className="side-video-list flex justify-between mb-2">
            <img
              src={item.snippet.thumbnails.medium.url}
              alt=""
              className="w-1/2 flexBasis_49"
            />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_converter(item.statistics.viewCount)} Views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
