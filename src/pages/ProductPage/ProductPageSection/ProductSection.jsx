import React from "react";
import PrimaryBtn from "../../../component/PrimaryBtn";
import BgImg from "../../../assets/ProductPageImgs/AllProducts/BgImg.png";
const ProductSection = ({
  ProductImg,
  ColorText,
  Headtext,
  SubText1,
  SubText2,
  onOpen,
}) => {
  return (
    // ✅ FIXED CARD
    <div
      className="flex flex-col gap-y-6 justify-between md:h-[440px] rounded-xl p-6 py-7 relative bg-no-repeat bg-cover bg-center bg-[#CECECE] "
      style={{
        backgroundImage: `url(${BgImg})`,
      }}
    >
      {/* heading */}
      <div className="space-y-2 ">
        <h1>
          {Headtext}&nbsp;<span className="text-[#969696]">{ColorText}</span>
        </h1>
        {/* contant = img */}
        <div className="relative w-full">
          <hr className="w-full h-1 bg-[#696969] border-none" />
          <p className="absolute top-0 left-0 w-[27%] h-1.5 bg-primary" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-7">
          <div className="order-2 md:order-1 lg:w-[85%]">
            <p className=" font-lato text-[#696969]">{SubText1}</p>
            <p className=" font-lato text-[#696969]">{SubText2}</p>
          </div>
          {/* img */}
          <div className="h-full w-full order-1 md:order-2">
            <img
              src={ProductImg}
              alt=""
              className="md:absolute right-0 bottom-0 "
            />
          </div>
        </div>
      </div>

      {/* ✅ FIXED BUTTON */}
      <PrimaryBtn onClick={onOpen} className="w-full md:w-[35%]  md:text-start">
        More Details
      </PrimaryBtn>
    </div>
  );
};

export default ProductSection;
