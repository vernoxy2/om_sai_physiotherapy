import React from "react";
import Home from "./HomePageSection/Home";
import headImg from "../../assets/HomePageImgs/headImg.webp";
import headImg2 from "../../assets/HomePageImgs/headImg2.webp";
import AboutUs from "../HomePage/HomePageSection/AboutUs"
import PatientsTrust from "../HomePage/HomePageSection/PatientsTrust";
import ClientReview from "../HomePage/HomePageSection/ClientReview";

const HomePage = () => {
  const slides = [
    {
      BgImg: headImg,
      MainText: (
        <>
          <span className="text-white">Physiotherapy </span>
          <span className="text-primary">in North York </span>
          <span className="text-white">
            | Expert Low
            <br />
            Back Pain{" "}
          </span>
          <span className="text-primary">Treatment</span>
        </>
      ),
      SubText: (
        <>
          Welcome to Omsai Physiotherapy Centre Inc. We provide personalized,
          expert physiotherapy in North York.
        </>
      ),
    },
    {
      BgImg: headImg2,
      MainText: (
        <>
          <span className="text-white">Physiotherapy </span>
          <span className="text-primary">in North York </span>
          <span className="text-white">
            | Expert Low
            <br />
            Back Pain{" "}
          </span>
          <span className="text-primary">Treatment</span>
        </>
      ),
      SubText: (
        <>
          Welcome to Omsai Physiotherapy Centre Inc. We provide personalized,
          expert physiotherapy in North York.
        </>
      ),
    },
  ];

  return (
    <div>
      <Home slides={slides} />
      <AboutUs />
      <PatientsTrust />
      <ClientReview/>
    </div>
  );
};

export default HomePage;
