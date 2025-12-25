import React from "react";
import img1 from "../../../assets/HomePageImgs/logo/img1.svg";
import img2 from "../../../assets/HomePageImgs/logo/img2.svg";
import img3 from "../../../assets/HomePageImgs/logo/img3.svg";  
import img4 from "../../../assets/HomePageImgs/logo/img4.svg";
import img5 from "../../../assets/HomePageImgs/logo/img5.svg";
import img6 from "../../../assets/HomePageImgs/logo/img6.svg";
import img7 from "../../../assets/HomePageImgs/logo/img7.svg";
import img8 from "../../../assets/HomePageImgs/logo/img8.svg";
import img9 from "../../../assets/HomePageImgs/logo/img9.svg";
import img10 from "../../../assets/HomePageImgs/logo/img10.svg";
import img11 from "../../../assets/HomePageImgs/logo/img11.svg";
import img12 from "../../../assets/HomePageImgs/logo/img12.svg";
import img13 from "../../../assets/HomePageImgs/logo/img13.svg";
import img14 from "../../../assets/HomePageImgs/logo/img14.svg";
import img15 from "../../../assets/HomePageImgs/logo/img15.svg";
import img16 from "../../../assets/HomePageImgs/logo/img16.svg";
import img17 from "../../../assets/HomePageImgs/logo/img17.svg";

const Logo = () => {
  const img = [
   img2, img3, img4, img5, img6, img7, img1, img8, img9,
    img10, img11, img12, img13, img14, img15, img16, img17
  ];

  return (
    <section>
      <div className="container text-center space-y-20">
        <h1>
          Direct billing with insurance
          <span className="text-[#696969]">
            <br /> provides
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {img.map((image, index) => (
            <div key={index} className="flex justify-center items-center bg-[#EDEDED]">
              <img
                src={image}
                alt={`logo-${index + 1}`}
                className="max-w-auto h-auto object-contain logo-img-hover "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logo;
