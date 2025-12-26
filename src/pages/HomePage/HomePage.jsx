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
          <h1 className="text-white">
            Physiotherapy{" "}
            <span className="text-primary">
              in Mississauga <br />|
            </span>{" "}
            Expert Low Back Pain{" "}
          </h1>
          Treatment
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
          <h1 className="text-white">
            Physiotherapy{" "}
            <span className="text-primary">
              in Mississauga <br />|
            </span>{" "}
            Expert Low Back Pain{" "}
          </h1>
          Treatment
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
      <section
        className="relative space-y-20 py-10 md:py-14 lg:py-20 bg-white
                   before:absolute before:h-14 before:w-full before:bg-white before:-top-12 before:content-[''] before:rounded-t-[33px] before:md:rounded-t-[66px] before:z-[1]
                   after:absolute after:h-14 after:w-full after:bg-white after:-bottom-12 after:content-[''] after:rounded-b-[33px] after:md:rounded-b-[66px] after:z-[1]"
      >
        <AboutUs />
        <Services />
        <AdvancedTreat />
        <PatientsTrust />
        <InsuranceCard />
        <Logo />
        <Visit />
        <ClientReview />
      </section>
    </div>
  );
};

export default HomePage;
