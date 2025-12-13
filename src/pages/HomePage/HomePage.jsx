import React from 'react'; 
import Home from './HomePageSection/Home';
import headImg from "../../assets/HomePageImgs/headImg.webp";

const HomePage = () => {
  const slides = [
    {
      BgImg: headImg,
      MainText: <>Physiotherapy in North York | Expert Low Back Pain Treatment</>,
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
  )
}

export default HomePage
