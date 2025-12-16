import React from "react";
import { FaStar } from "react-icons/fa";
import round from "../../../assets/ClientReviewPageImgs/round.png"

const ClientReview = () => {
  const Data = [
    {
      id: 1,
      value: "Client Reviews & Testimonials",
      MainText: "Healing Stories from Those We’ve Helped",
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
      name: "James Smith",
      rating: 4,
      review: "Knee-Surgery",
    },
    {
      name: "Mary Johnson",
      rating: 5,
      review: "Back-Pain",
    },
  ];

  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
        {Data.map((item) => (
          <div key={item.id} className="space-y-5">
            <h4>{item.value}</h4>
            <h1>{item.MainText}</h1>
            <div>{item.subText}</div>
            <div>123</div>
          </div>
        ))}
        review
        <div>

        </div>
      </div>
    </section>
  );
};

export default ClientReview;
