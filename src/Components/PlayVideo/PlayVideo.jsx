import React from "react";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

const PlayVideo = () => {
  return (
    <div className="play-video flexBasis_69">
      <video className="w-full" src={video1} controls autoPlay muted></video>
      <h3 className="mt-3 font-semibold text-2xl">
        Best youtube Chanel To Learn Web Development
      </h3>
      <div className="play-video-info flex items-center justify-between flex-wrap mt-3 text-sm text-neutral-500">
        <p>1525 Views &bull; 2 days ago</p>
        <div className="flex">
          <span>
            <img src={like} alt="" /> 125
          </span>

          <span>
            <img src={dislike} alt="" />2
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
        <img className="w-10 rounded-full mr-4" src={jack} alt="" />
        <div className="flex-1 leading-4">
          <p className="text-black font-semibold text-lg">GreatStack</p>
          <span className="text-sm text-neutral-500">1M Subscribers</span>
        </div>
        <button className="bg-red-600 text-white py-2 px-8 border-0 outline-0 rounded cursor-pointer">
          Subscriber
        </button>
      </div>

      <div className="vid-description pl-14 my-4">
        <p className="text-sm mb-1 text-neutral-500">
          Chanel that makes learning Easy
        </p>
        <p className="text-sm mb-1 text-neutral-500">
          Subscribe GreatStack to watch more Tutorials on web development
        </p>
        <div className="dash-full"></div>
        <h4 className="text-sm text-neutral-500 mt-4">130 Comments</h4>
        <div className="comment flex items-start my-5">
          <img src={user_profile} alt="" className="w-9 rounded-full mr-4" />
          <div>
            <h3 className="text-sm mb-0.5">
              Jack Nicholson{" "}
              <span className="text-xs text-neutral-500 font-medium ml-2">
                1 day ago
              </span>
            </h3>
            <p>
              A global computer network providing a variety of information and
            </p>
            <div className="comment-action flex items-center my-2">
              <img src={like} alt="" className="border-0 w-5 mr-1"/>
              <span className="mr-5 text-neutral-500">244</span>
              <img src={dislike} alt="" className="border-0 w-5 mr-1"/>
            </div>
          </div>
        </div>

        <div className="comment flex items-start my-5">
          <img src={user_profile} alt="" className="w-9 rounded-full mr-4" />
          <div>
            <h3 className="text-sm mb-0.5">
              Jack Nicholson{" "}
              <span className="text-xs text-neutral-500 font-medium ml-2">
                1 day ago
              </span>
            </h3>
            <p>
              A global computer network providing a variety of information and
            </p>
            <div className="comment-action flex items-center my-2">
              <img src={like} alt="" className="border-0 w-5 mr-1"/>
              <span className="mr-5 text-neutral-500">244</span>
              <img src={dislike} alt="" className="border-0 w-5 mr-1"/>
            </div>
          </div>
        </div>

        <div className="comment flex items-start my-5">
          <img src={user_profile} alt="" className="w-9 rounded-full mr-4" />
          <div>
            <h3 className="text-sm mb-0.5">
              Jack Nicholson{" "}
              <span className="text-xs text-neutral-500 font-medium ml-2">
                1 day ago
              </span>
            </h3>
            <p>
              A global computer network providing a variety of information and
            </p>
            <div className="comment-action flex items-center my-2">
              <img src={like} alt="" className="border-0 w-5 mr-1"/>
              <span className="mr-5 text-neutral-500">244</span>
              <img src={dislike} alt="" className="border-0 w-5 mr-1"/>
            </div>
          </div>
        </div>

        <div className="comment flex items-start my-5">
          <img src={user_profile} alt="" className="w-9 rounded-full mr-4" />
          <div>
            <h3 className="text-sm mb-0.5">
              Jack Nicholson{" "}
              <span className="text-xs text-neutral-500 font-medium ml-2">
                1 day ago
              </span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              communication facilities, consisting of interconnected networks
              using standardized communication protocol
              s.
            </p>
            <div className="comment-action flex items-center my-2">
              <img src={like} alt="" className="border-0 w-5 mr-1"/>
              <span className="mr-5 text-neutral-500">244</span>
              <img src={dislike} alt="" className="border-0 w-5 mr-1"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
