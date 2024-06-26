import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";

const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />

      <div
        className={`container mx-auto px-[5%] lg:p-[20px_2%_20px_12%] ${
          sidebar ? "" : "lg:pl-[7%]"
        } esseInOut`}
      >
        <Feed category={category} />
      </div>
    </>
  );
};

export default Home;
