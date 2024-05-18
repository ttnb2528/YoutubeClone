import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../data";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
      await fetch(videoList_url)
        .then((response) => response.json())
        .then((data) => setData(data.items));
    };
    fetchData();
  }, [category]);

  return (
    <div className="feed grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-x-4 gap-y-8 mt-4">
      {data.map((item, i) => {
        return (
          <Link
            key={i}
            to={`video/${item.snippet.categoryId}/${item.id}`}
            className="card"
          >
            <img
              src={item.snippet.thumbnails.medium.url}
              alt=""
              className="w-full rounded"
            />
            <h2 className="text-base font-semibold text-black my-1 mx-0 line-clamp-2">
              {item.snippet.title}
            </h2>
            <h3 className="text-sm font-semibold text-neutral-500">
              {item.snippet.channelTitle}
            </h3>
            <p className="text-sm">
              {value_converter(item.statistics.viewCount)} views &bull;{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
