import React from "react";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div px-[2%] py-[10px] justify-between bg-white sticky top-0 z-10 [box-shadow:0_0_10px_rgba(0,0,0,0.2)]">
      <div className="nav-left flex-div">
        <img
          onClick={() => setSidebar((prev) => !prev)}
          className="menu-icon md:w-[22px] md:mr-[25px]"
          src={menu_icon}
          alt=""
        />
        <Link to='/'>
          <img className="logo md:w-[130px]" src={logo} alt="logo" />
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div border border-[#ccc] md:mr-[15px] md:p-[8px_12px] rounded-[25px]">
          <input
            className="md:w-[400px] outline-none bg-transparent"
            type="text"
            placeholder="search..."
          />
          <img className="w-[15px]" src={search_icon} alt="search" />
        </div>
      </div>

      <div className="nav-right flex-div [&>img]:w-6 [&>img]:mr-6">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img
          src={profile_icon}
          className="user-icon rounded-full"
          alt=""
          style={{ width: "2rem" }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
