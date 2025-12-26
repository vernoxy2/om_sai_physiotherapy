import React from "react";
import BgImg from "../../../assets/HomePageImgs/Service/BgImg.png";
import Title from "../../../component/Title";
import cover1 from "../../../assets/HomePageImgs/Service/cover1.png";
import cover2 from "../../../assets/HomePageImgs/Service/cover2.png";
import cover3 from "../../../assets/HomePageImgs/Service/cover3.png";
import cover4 from "../../../assets/HomePageImgs/Service/cover4.png";
import cover5 from "../../../assets/HomePageImgs/Service/cover5.png";
import cover6 from "../../../assets/HomePageImgs/Service/cover6.png";
import cover7 from "../../../assets/HomePageImgs/Service/cover7.png";
import cover8 from "../../../assets/HomePageImgs/Service/cover8.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { BsArrowRightShort } from "react-icons/bs";
import PrimaryBtn from "../../../component/PrimaryBtn";

const Services = () => {
  const coverImages = [
    cover1,
    cover2,
    cover3,
    cover4,
    cover5,
    cover6,
    cover7,
    cover8,
  ];
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
      id: 1,
      Maintext: "Massage Therapy",
      Subtext:
        "Therapeutic massage helps restore movement, ease pain, and maintain long-term physical health.",
    },
    {
      id: 2,
      Maintext: "Physiotherapy",
      Subtext:
        "Expert physiotherapy helps restore movement, rebuild strength, and improve overall physical well-being. Personalized treatment plans support faster recovery and long-term mobility.",
    },
    {
      id: 3,
      Maintext: "Acupuncture Treatment",
      Subtext:
        "Acupuncture reduces pain, decreases inflammation, and enhances overall body function, supporting holistic wellness.",
    },
    {
      id: 4,
      Maintext: "Chiropractic Care",
      Subtext:
        "Chiropractic care promotes better spinal function and overall health by relieving tension through specialized manual techniques.",
    },
    {
      id: 5,
      Maintext: "Pelvic floor physiotherapy",
      Subtext:
        "Pelvic floor physiotherapy strengthens muscles, improves bladder control, reduces pain, and enhances core stability",
    },
    {
      id: 6,
      Maintext: "Compression stockings braces",
      Subtext:
        "Supportive physiotherapy compression stockings and braces improve circulation, reduce swelling, and aid muscle recovery",
    },
    {
      id: 7,
      Maintext: "Custom made orthotics",
      Subtext:
        "Custom-made physiotherapy orthotics provide personalized foot support, improve alignment, reduce pain, and enhance mobility effectively.",
    },
    {
      id: 8,
      Maintext: "Shockwave Therapy",
      Subtext:
        "Shockwave therapy is a non-surgical, gentle treatment that enhances circulation, reduces inflammation, and stimulates the body's natural healing process.",
    },
  ];
  return (
    <section
      className="bg-cover bg-no-repeat bg-center "
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="container grid grid-cols-1 space-y-12 capitalize">
        <div className="mx-auto w-full flex flex-col items-center justify-center text-center space-y-3">
          <Title className="text-white text-xl" title="Our Services" />
          {headText.map((item, index) => (
            <h1 className="" key={index}>
              {item.MainText}
            </h1>
          ))}
        </div>
        {/* swipe cardData */}
        <div className="text-white relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={30}
            loop={true}
            speed={7000}
            autoplay={{
              delay: 700,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                if (index < 3) return `<span class="${className}"></span>`;
                return "";
              },
            }}
            breakpoints={{
              0: { slidesPerView: 1, slidesPerGroup: 1 },
              640: { slidesPerView: 2, slidesPerGroup: 2 },
              768: { slidesPerView: 3, slidesPerGroup: 3 },
              1024: { slidesPerView: 4, slidesPerGroup: 4 },
            }}
            className="pb-16"
          >
            {cardData.map((item, index) => (
              <SwiperSlide key={index}>
                {/* Outer container: fixed height */}
                <div className="relative h-[400px] group ">
                  {/* Inner card: lifts on hover */}
                  <div className="rounded-md overflow-hidden cursor-pointer h-full transition-transform duration-5000 border ease-out group-hover:-translate-y-8 group-hover:shadow-2xl">
                    <img
                      src={coverImages[index]}
                      alt={item.Maintext}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 bg-gradient-to-t from-black via-black/20 to-transparent">
                      <h3 className="text-2xl text-white mb-2 font-bold">
                        {item.Maintext}
                      </h3>
                      <p className="text-white">{item.Subtext}</p>
                    </div>
                  </div>

                  {/* Default MainText under the card */}
                  <div className="absolute bottom-0 left-0 right-0 mb-5 flex items-center justify-center text-center group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-xl text-white">{item.Maintext}</h3>
                  </div>

                  {/* Button */}
                  <div className="absolute w-full flex items-center justify-center left-1/2 -translate-x-1/2 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    <PrimaryBtn className="bg-primary text-white rounded-full px-6 py-2 w-full">
                      Free Consultation
                    </PrimaryBtn>
                  </div>
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
