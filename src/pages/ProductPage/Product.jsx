import React from "react";
import ProductPages from "./ProductPageSection/ProductPages";
import BgImg from "./../../assets/ServicesPageImgs/PhysioTherapy/BgImg.png";
import PhysioHead from "../ServicePage/ServiceSection/PhysioHead";


const Product = () => {
  return (
    <>
    <PhysioHead
        Heading={
          <>
            <span className="text-white">Orthotics,</span> Braces & Supportive
          </>
        }
        WhiteText="Products"
        BgImg={BgImg}
        subtext="At Om Sai Physiotherapy Clinic, we offer a comprehensive range of custom orthotics, medical-grade braces, compression stockings, 
        and supportive devices designed to reduce pain, improve mobility,and correct biomechanical issues."
        subtext1="Our goal is to help you move comfortably, prevent further injury, and support your long-term musculoskeletal health with tailored 
        solutions that truly fit your body."
      />
    <section
      className=" relative py-10 md:py-14 lg:py-16 bg-white space-y-0
                   before:absolute before:h-14 before:w-full before:bg-white before:-top-12 before:content-[''] before:rounded-t-[33px] before:md:rounded-t-[66px] before:z-[1]
                   after:absolute after:h-14 after:w-full after:bg-white after:-bottom-12 after:content-[''] after:rounded-b-[33px] after:md:rounded-b-[66px] after:z-[1]"
    >
      <ProductPages />
    </section>
    </>
  );
};

export default Product;
