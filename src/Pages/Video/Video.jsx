import React from "react";
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recommended from "../../Components/Recommended/Recommended";

const Video = () => {
  return (
    <div className="play-container bg-[#f9f9f9] p-[20px_2%] flex justify-between flex-wrap ">
      <PlayVideo />
      <Recommended />
    </div>
  );
};

export default Video;
