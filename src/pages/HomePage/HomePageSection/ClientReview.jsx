import React, { useState, useEffect } from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import round from "../../../assets/ClientReviewPageImgs/round.png";
import BgImg from "../../../assets/ClientReviewPageImgs/BgImg.png";
import Title from "../../../component/Title";


const ClientReview = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const Data = [
    {
      id: 1,
      // value: "Client Reviews & Testimonials",
      MainText: (
        <>
          <span>Healing Stories </span>
          <span className="text-white">from Those We've </span>
          <span>Helped</span>
        </>
      ),
      subText: (
        <>
          <p>
            Read what our patients have to say about their experiences at Om Sai
            Physiotherapy Clinic. Discover how our personalized physiotherapy
            care has helped them regain mobility, reduce pain, and improve
            overall health.
          </p>
          <p className="mt-3">
            We value your feedback! Please consider leaving a review on Google
            to share your experience and help others find trusted physiotherapy
            care.
          </p>
        </>
      ),
    },
  ];

  const Review = [
    {
      rating: 4,
      img: round,
      name: "James Smith",
      review: "Knee-Surgery",
    },
    {
      rating: 5,
      img: round,
      name: "Mary Johnson",
      review: "Back-Pain",
    },
    {
      rating: 2,
      img: round,
      name: "river cristal",
      review: "Ankle-surgery",
    },
  ];

  // ✅ Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) =>
        prev === Review.length - 1 ? 0 : prev + 1
      );
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [Review.length]);

  return (
    <section
      style={{ backgroundImage: `url(${BgImg})` }}
      className="bg-cover bg-center bg-no-repeat  capitalize"
    >
      <div className="relative container space-y-12 space-x-60">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {Data.map((item) => (
            <div key={item.id} className="space-y-7   ">
              {/* <BaseLine className=""/> */}
            <Title className="text-white text-xl" title='Client Reviews & Testimonials'/>
              <h1>{item.MainText}</h1>
              <div className="text-white w-full">{item.subText}</div>

              {/* ⭐ Client Review */}
              {Review[currentReview] && (
                <div className="space-y-5 text-white">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < Review[currentReview].rating
                            ? "text-yellow-400"
                            : "text-gray-400"
                        }
                      />
                    ))}
                  </div>

                  <div className="flex gap-5">
                    <img
                      src={Review[currentReview].img}
                      alt=""
                      className="w-12 h-12"
                    />
                    <div>
                      <h4 className="font-semibold">
                        {Review[currentReview].name}
                      </h4>
                      <p className="text-sm">
                        {Review[currentReview].review}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ⬅➡ Navigation */}
        <div className="hidden md:flex absolute top-3/2 left-1/3 -translate-x-1/2 -translate-y-2/3 gap-8">
          <button
            onClick={() =>
              setCurrentReview(
                currentReview === 0
                  ? Review.length - 1
                  : currentReview - 1
              )
            }
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-primary hover:bg-primary hover:text-white transition"
          >
            <FaArrowLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() =>
              setCurrentReview(
                currentReview === Review.length - 1
                  ? 0
                  : currentReview + 1
              )
            }
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-primary hover:bg-primary hover:text-white transition"
          >
            <FaArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
