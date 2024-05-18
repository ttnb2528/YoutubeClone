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
    <div className="recommended basis-full lg:basis-[30%]">
      {apiData.map((item, i) => {
        return (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            key={i}
            className="side-video-list flex mb-2"
          >
            <img
              src={item.snippet.thumbnails.medium.url}
              alt=""
              className="w-1/2 basis-[49%] mr-2"
            />
            <div className="vid-info">
              <h4 className="text-base font-semibold text-black my-1 mx-0">{item.snippet.title}</h4>
              <p className="text-sm font-semibold text-neutral-500">{item.snippet.channelTitle}</p>
              <p className="text-sm">{value_converter(item.statistics.viewCount)} Views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
