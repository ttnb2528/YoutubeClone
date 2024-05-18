import React from "react";
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recommended from "../../Components/Recommended/Recommended";
import { useParams } from "react-router-dom";

const Video = () => {
  const { videoId, categoryId } = useParams();

  return (
    <div className="play-container bg-[#f9f9f9] p-[20px_2%] flex justify-between flex-wrap ">
      <PlayVideo videoId={videoId} />
      <Recommended />
    </div>
  );
};

export default Video;
