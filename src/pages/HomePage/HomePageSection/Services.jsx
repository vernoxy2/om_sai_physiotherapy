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
import { BsArrowRightShort } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrimaryBtn from "../../../component/PrimaryBtn";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

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
        link:"/services/massage-therapy"
    },
    {
      id: 2,
      Maintext: "Physiotherapy",
      Subtext:
        "Expert physiotherapy helps restore movement, rebuild strength, and improve overall physical well-being. Personalized treatment plans support faster recovery and long-term mobility.",
        link:"/services/physiotherapy-mississauga"
    },
    {
      id: 3,
      Maintext: "Acupuncture Treatment",
      Subtext:
        "Acupuncture reduces pain, decreases inflammation, and enhances overall body function, supporting holistic wellness.",
        link:"/services/acupuncture-treatment"
    },
    {
      id: 4,
      Maintext: "Chiropractic Care",
      Subtext:
        "Chiropractic care promotes better spinal function and overall health by relieving tension through specialized manual techniques.",
        link:"/services/chiropractic-care"
    },
    {
      id: 5,
      Maintext: "Pelvic floor physiotherapy",
      Subtext:
        "Pelvic floor physiotherapy strengthens muscles, improves bladder control, reduces pain, and enhances core stability",
        // link:"/services/pelvic-floor-physiotherapy"
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
        link:"/services/shockwave-therapy"
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section
      className="bg-cover bg-no-repeat bg-center py-16"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      {/* main div */}
      <div className="container mx-auto px-4 capitalize">
        {/* title */}
        <div className="mx-auto w-full flex flex-col items-center justify-center text-center space-y-3 mb-12">
          <Title className="text-white text-xl" title="Our Services" />
          {headText.map((item, index) => (
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              key={index}
            >
              {item.MainText}
            </h1>
          ))}
        </div>

        {/* slider with cards */}
        <div className="pt-10 pb-16 container">
          <Slider {...settings}>
            {cardData.map((item, index) => (
              <div
                key={item.id}
                className="px-3 flex flex-col h-full rounded-3xl"
              >
                <Link to={item.link}>
                <div
                  className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 
                                transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/30 cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-full overflow-hidden ">
                    <img
                      src={coverImages[index]}
                      alt={item.Maintext}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 group-hover:from-black via-black/40 group-hover:via-black/80 to-transparent duration-300 transition-all" />
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3 absolute inset-0 flex flex-col items-center justify-between">
                    <div className="flex w-full justify-end">
                      <div className="bg-white group-hover:bg-primary p-1.5 rounded-full text-black group-hover:text-white group-hover:-rotate-45 text-2xl duration-300 transition-all">
                        <GoArrowRight />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-white text-xl font-bold transition-colors duration-300 text-center">
                        {item.Maintext}
                      </h3>
                      <div className="space-y-3 hidden group-hover:block duration-500 transition-opacity opacity-0 group-hover:opacity-100">
                        <div className="bg-white w-full py-[0.5px]"></div>
                        <p className="text-white/80 text-sm leading-relaxed line-clamp-3">
                          {item.Subtext}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                </Link>
                {/* Button - hidden by default, appears outside bottom on hover */}
                <div
                  className="absolute -bottom-16 left-0 right-0 w-full flex items-center justify-center 
                                  opacity-0 group-hover:opacity-100 group-hover:bottom-4
                                  transition-all duration-500 ease-out"
                >
                  <PrimaryBtn className="mx-auto w-[80%]">
                    Free Consultation
                  </PrimaryBtn>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Services;
