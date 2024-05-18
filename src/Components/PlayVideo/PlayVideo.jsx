import React, { useEffect, useState } from "react";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = () => {
  const { videoId } = useParams();

  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    const fetchVideoData = async () => {
      const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
      await fetch(videoDetails_url)
        .then((response) => response.json())
        .then((data) => setApiData(data.items[0]));
    };
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    const fetchOtherData = async () => {
      const dataChannel_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${
        apiData ? apiData.snippet.channelId : ""
      }&key=${API_KEY}`;
      await fetch(dataChannel_url).then((response) =>
        response.json().then((data) => setChannelData(data.items[0]))
      );

      const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
      await fetch(comment_url)
        .then((response) => response.json())
        .then((data) => setCommentData(data.items));
    };
    fetchOtherData();
  }, [apiData, videoId]);

  return (
    <div className="play-video basis-full lg:basis-[69%]">
      {/* <video className="w-full" src={video1} controls autoPlay muted></video> */}
      <iframe
        className="w-full h-[50vw] lg:h-[37vw]"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3 className="mt-3 font-semibold text-2xl">
        {apiData ? apiData.snippet.title : "Title Here"}
      </h3>
      <div className="play-video-info flex items-center justify-between flex-wrap mt-3 text-sm text-neutral-500">
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : "16K"}
          Views &bull;{" "}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div className="flex">
          <span>
            <img src={like} alt="" />{" "}
            {apiData ? value_converter(apiData.statistics.likeCount) : ""}
          </span>

          <span>
            <img src={dislike} alt="" />
          </span>

          <span>
            <img src={share} alt="" />
            Share
          </span>

          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>

      <div className="dash-full my-3"></div>

      <div className="publisher flex items-center mt-5">
        <img
          className="w-10 rounded-full mr-4"
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
          alt=""
        />
        <div className="flex-1 leading-4">
          <p className="text-black font-semibold text-lg">
            {apiData ? apiData.snippet.channelTitle : "channelHere"}
          </p>
          <span className="text-sm text-neutral-500">
            {channelData
              ? value_converter(channelData.statistics.subscriberCount)
              : ""}
          </span>
        </div>
        <button className="bg-red-600 text-white py-2 px-8 border-0 outline-0 rounded cursor-pointer">
          Subscriber
        </button>
      </div>

      <div className="vid-description pl-0 lg:pl-14 my-4">
        <p className="text-sm mb-1 text-neutral-500">
          {apiData ? apiData.snippet.description : "Description Here"}
        </p>
        <div className="dash-full"></div>
        <h4 className="text-sm text-neutral-500 mt-4">
          {apiData ? value_converter(apiData.statistics.commentCount) : ""}{" "}
          Comments
        </h4>
        {commentData.map((item, i) => {
          return (
            <div key={i} className="comment flex items-start my-5">
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt=""
                className="w-9 rounded-full mr-4"
              />
              <div>
                <h3 className="text-sm mb-0.5">
                  {item.snippet.topLevelComment.snippet.authorDisplayName}
                  <span className="text-xs text-neutral-500 font-medium ml-2">
                    1 day ago
                  </span>
                </h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action flex items-center my-2">
                  <img src={like} alt="" className="border-0 w-5 mr-1" />
                  <span className="mr-5 text-neutral-500">
                    {value_converter(
                      item.snippet.topLevelComment.snippet.likeCount
                    )}
                  </span>
                  <img src={dislike} alt="" className="border-0 w-5 mr-1" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
