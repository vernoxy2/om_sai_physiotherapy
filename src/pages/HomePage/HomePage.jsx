import React from "react";
import Home from "./HomePageSection/Home";
import headImg from "../../assets/HomePageImgs/headImg.webp";

const HomePage = () => {
  const slides = [
    {
      BgImg: headImg,
      MainText: (
        <>
          <span className="text-white">Physiotherapy</span>
          <span className="text-primary">in North York</span>
          <span className="text-white">| Expert Low<br/>Back Pain</span>
          <span className="text-primary">Treatment</span>
        </>
      ),

      SubText: (
        <>
          Welcome to Omsai Physiotherapy Centre Inc. We provide personalized,
          expert physiotherapy in North York for a wide range of conditions.
          Click below to learn more.
        </>
      ),
    },
  ];
  return (
    <div>
      <Home slides={slides} />
    </div>
  );
};

export default HomePage;
