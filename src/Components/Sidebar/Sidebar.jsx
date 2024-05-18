import React from "react";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

const Sidebar = ({ sidebar, category, setCategory }) => {
  const categories = [
    { id: 0, name: "Home", icon: home },
    { id: 20, name: "Gaming", icon: game_icon },
    { id: 2, name: "Automobiles", icon: automobiles },
    { id: 17, name: "Sports", icon: sports },
    { id: 24, name: "Entertainment", icon: entertainment },
    { id: 28, name: "Tech", icon: tech },
    { id: 10, name: "Music", icon: music },
    { id: 22, name: "Blogs", icon: blogs },
    { id: 25, name: "News", icon: news },
  ];

  return (
    <div
      className={`side-bar ${
        sidebar ? "" : "small-sidebar"
      } bg-white w-[15%] h-[100vh] fixed top-0 pl-[2%] pt-20`}
    >
      <div className="sortCut-links [&>div>img]:w-6 [&>div>img]:mr-5">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`side-link ${category === cat.id ? "active" : ""}`}
            onClick={() => setCategory(cat.id)}
          >
            <img src={cat.icon} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
        <div className="dash"></div>
        {/* <div
          className={`side-link ${category === 0 ? "active" : ""}`}
          onClick={() => setCategory(0)}
        >
          <img src={home} alt="hone" />
          <p>Home</p>
        </div>

        <div className="side-link" onClick={() => setCategory(20)}>
          <img src={game_icon} alt="game_icon" />
          <p>Gaming</p>
        </div>

        <div className="side-link" onClick={() => setCategory(2)}>
          <img src={automobiles} alt="automobiles" />
          <p>Automobiles</p>
        </div>

        <div className="side-link" onClick={() => setCategory(17)}>
          <img src={sports} alt="sports" />
          <p>Sports</p>
        </div>

        <div className="side-link" onClick={() => setCategory(24)}>
          <img src={entertainment} alt="entertainment" />
          <p>Entertainment</p>
        </div>

        <div className="side-link" onClick={() => setCategory(28)}>
          <img src={tech} alt="tech" />
          <p>Tech</p>
        </div>

        <div className="side-link" onClick={() => setCategory(10)}>
          <img src={music} alt="music" />
          <p>Music</p>
        </div>

        <div className="side-link" onClick={() => setCategory(22)}>
          <img src={blogs} alt="blogs" />
          <p>Blogs</p>
        </div>

        <div className="side-link" onClick={() => setCategory(25)}>
          <img src={news} alt="news" />
          <p>News</p>
        </div>
        <div className="dash"></div> */}
      </div>

      <div className="subscribed-list">
        <h3 className="text-[13px] m-[20px_0] text-[#5a5a5a]">Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="" />
          <p>PewDieDie</p>
        </div>

        <div className="side-link">
          <img src={simon} alt="" />
          <p>MrBeast</p>
        </div>

        <div className="side-link">
          <img src={tom} alt="" />
          <p>Justin Bibber</p>
        </div>

        <div className="side-link">
          <img src={megan} alt="" />
          <p>5-Minutes Crafts</p>
        </div>

        <div className="side-link">
          <img src={cameron} alt="" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
