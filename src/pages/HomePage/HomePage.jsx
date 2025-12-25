import React from "react";
import Home from "./HomePageSection/Home";
import headImg from "../../assets/HomePageImgs/headImg.webp";
import headImg2 from "../../assets/HomePageImgs/headImg2.webp";
import AboutUs from "../HomePage/HomePageSection/AboutUs";
import Services from "./HomePageSection/Services";
import AdvancedTreat from "../HomePage/HomePageSection/AdvancedTreat";
import InsuranceCard from "../HomePage/HomePageSection/InsuranceCard";
import Logo from "../HomePage/HomePageSection/Logo";
import Visit from "./HomePageSection/Visit";
import PatientsTrust from "../HomePage/HomePageSection/PatientsTrust";
import ClientReview from "../HomePage/HomePageSection/ClientReview";

const HomePage = () => {
  const slides = [
    {
      BgImg: headImg,
      MainText: (
        <>
          <h1 className="text-white">Physiotherapy <span className="text-primary">in Mississauga <br/>|</span>  Expert Low Back Pain </h1>Treatment
        </>
      ),
      SubText: (
        <>
          Welcome to Omsai Physiotherapy Centre Inc. We provide personalized,
          expert physiotherapy in Mississauga for a wide range of conditions.
          Click below to learn more
        </>
      ),
    },
    {
      BgImg: headImg2,
     MainText: (
        <>
          <h1 className="text-white">Physiotherapy <span className="text-primary">in Mississauga <br/>|</span>  Expert Low Back Pain </h1>Treatment
        </>
      ),
      SubText: (
        <>
          Welcome to Omsai Physiotherapy Centre Inc. We provide personalized,
          expert physiotherapy in Mississauga for a wide range of conditions.
          Click below to learn more
        </>
      ),
    },
  ];

  return (
    <div>
      <Home slides={slides} />
      <AboutUs /> 
      <Services />
      <AdvancedTreat />
      <PatientsTrust />
      <InsuranceCard />
      <Logo />
      <Visit />
      <ClientReview />
    </div>
  );
};

export default HomePage;
