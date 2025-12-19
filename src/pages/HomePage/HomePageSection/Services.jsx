import React from "react";
import BgImg from "../../../assets/HomePageImgs/Service/BgImg.png"
import Title from "../../../component/Title";
import cover1 from "../../../assets/HomePageImgs/Service/cover1.png"
import cover2 from "../../../assets/HomePageImgs/Service/cover2.png"
import cover3 from "../../../assets/HomePageImgs/Service/cover3.png"
import cover4 from "../../../assets/HomePageImgs/Service/cover4.png"
import cover5 from "../../../assets/HomePageImgs/Service/cover5.png"
import cover6 from "../../../assets/HomePageImgs/Service/cover6.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Services = () => {
  const coverImages = [cover1, cover2, cover3, cover4, cover5, cover6];
  const headText = [
    {
      MainText: (
        <>
          <span className="text-white">Strengthening Every </span> Step
          <br />
          <span className="text-primary"> of Your Wellness</span> Path
        </>
      ),
    },
  ];

  const cardData = [
    {
      Maintext: "Massage Therapy",
      Subtext:
        "Therapeutic massage helps restore movement, ease pain, and maintain long-term physical health.",
    },
    {
      Maintext: "Physiotherapy",
      Subtext:
        "Expert physiotherapy helps restore movement, rebuild strength, and improve overall physical well-being. Personalized treatment plans support faster recovery and long-term mobility.",
    },
    {
      Maintext: "Acupuncture Treatment",
      Subtext:
        "Acupuncture reduces pain, decreases inflammation, and enhances overall body function, supporting holistic wellness.",
    },
    {
      Maintext: "Chiropractic Care",
      Subtext:
        "Chiropractic care promotes better spinal function and overall health by relieving tension through specialized manual techniques.",
    },
    {
      Maintext: "Shockwave Therapy",
      Subtext:
        "Shockwave therapy is a non-surgical, gentle treatment that enhances circulation, reduces inflammation, and stimulates the body’s natural healing process.",
    },
    {
      Maintext: "Spinal Traction",
      Subtext:
        " Spinal traction gently decompresses the spinal discs to relieve discomfort, improve mobility, and support recovery.",
    },
  ];
  return (
    <section
      className="bg-cover bg-no-repeat bg-center max-h-full"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="container grid grid-cols-1 space-y-12">
        <div className="mx-auto w-full flex flex-col items-center justify-center text-center space-y-3">
          <Title className="text-white text-xl" title="Our Services" />
          {headText.map((item, index) => (
            <h1 className="w-" key={index}>
              {item.MainText}
            </h1>
          ))}
        </div>
        {/* swipe cardData */}
        <div className="text-white relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            slidesPerGroup={1} // 🔥 controls dot count
            spaceBetween={24}
            loop={true} // 🔥 infinite loop
            speed={900} // smooth slide
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              1024: {
                slidesPerView: 4, // 🔥 4 images
                slidesPerGroup: 4, // 🔥 keeps dots clean
              },
            }}
            className="pb-16"
          >
            {cardData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className=" rounded-md p-6 space-y-4 h-full">
                  <img
                    src={coverImages[index]}
                    alt={item.Maintext}
                    className="w-full h-auto object-cover rounded-lg "
                  />

                  <h3 className="text-xl font-semibold text-primary">
                    {item.Maintext}
                  </h3>

                  <p className="text-sm text-gray-200">{item.Subtext}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Services;
