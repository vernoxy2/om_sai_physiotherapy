import React from "react";
import Title from "../../../component/Title";
import img1 from "../../../assets/ConditionPageImgs/Treat/img1.png";
import img2 from "../../../assets/ConditionPageImgs/Treat/img2.png";
import img3 from "../../../assets/ConditionPageImgs/Treat/img3.png";
import img4 from "../../../assets/ConditionPageImgs/Treat/img4.png";
import img5 from "../../../assets/ConditionPageImgs/Treat/img5.png";
import img6 from "../../../assets/ConditionPageImgs/Treat/img6.png";
import img7 from "../../../assets/ConditionPageImgs/Treat/img7.png";
import img8 from "../../../assets/ConditionPageImgs/Treat/img8.png";
import img9 from "../../../assets/ConditionPageImgs/Treat/img9.png";
import img10 from "../../../assets/ConditionPageImgs/Treat/img10.png";

const ConditionTreat = () => {
  const headText = [
    {
      MainText: (
        <h1>
          Comprehensive &nbsp;
          <span className="text-[#696969]">
            Care for
            <br /> Every<span className="text-primary"> Condition </span>
          </span>
        </h1>
      ),
    },
  ];

  const cardData = [
    {
      id: 1,
      img: img1,
      Type: "Shoulder",
      SubText: [
        "Rotator Cuff Injury",
        "Shoulder Pain",
        "Rotator Cuff Tear",
        "Frozen Shoulder",
        "Shoulder Joint Dislocations",
      ],
    },
    {
      id: 2,
      img: img2,
      Type: "Neck & Back",
      SubText: [
        "Neck Pain",
        "Herniated Disc",
        "Muscle Strain",
        "Sciatica",
        "Scoliosis",
      ],
    },
    {
      id: 3,
      img: img3,
      Type: "Hip",
      SubText: [
        "Hip Pain",
        "Arthritis",
        "Bursitis",
        "Labral Tear",
        "Hip Replacement",
      ],
    },
    {
      id: 4,
      img: img4,
      Type: "Elbow",
      SubText: [
        "Tennis Elbow",
        "Golfer's Elbow",
        "Bursitis",
        "Fractures",
        "Ligament Injuries",
      ],
    },
    {
      id: 5,
      img: img5,
      Type: "Wrist & Hand",
      SubText: [
        " Wrist & Hand Pain",
        "Carpal Tunnel Syndrome",
        "Wrist Fractures",
      ],
    },
    {
      id: 6,
      img: img6,
      Type: "Knee",
      SubText: [
        "Knee Pain & Arthritis",
        "ACL Injury",
        "MCL Sprains",
        "Patellar Tendonitis",
        "Patellofemoral Syndrome",
        "Knee Replacement",
      ],
    },
    {
      id: 7,
      img: img7,
      Type: "Ankle & Foot ",
      SubText: [
        " Ankle Pain",
        "Plantar Fasciitis",
        "Metatarsalgia",
        "Heel & Foot Pain",
      ],
    },
    {
      id: 8,
      img: img8,
      Type: "Injuries ",
      SubText: [
        "Headache & Concussion",
        "Dizziness, Vertigo & Imbalance",
        "Chronic Pain Syndrome",
        "Work-Related Injuries",
        "Whiplash",
        "Repetitive Strain Injuries",
        "Post-Surgery Rehabilitation",
        "Tendonitis",
        "TMJ Dysfunction",
        "Muscle Sprains",
      ],
    },
    {
      id: 9,
      img: img9,
      Type: "Motor Vehicle Accident Rehabilitation",
      SubText: [],
    },
    {
      id: 10,
      img: img10,
      Type: "Workplace Injury (WSIB)",
      SubText: [],
    },
  ];

  return (
    <section>
      <div className="container gap-10">
        <div className="mx-auto w-full flex flex-col items-center justify-center text-center space-y-3">
          <Title
            className="text-white text-xl items-center"
            title="Conditions We Treat"
          />
          {headText.map((item, index) => (
            <div key={index}>{item.MainText}</div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-9">
          {cardData.map((member, index) => (
            <div
              key={index}
              className="relative text-center rounded-xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="relative group rounded-t-xl overflow-hidden">
                <img src={member.img} alt={member.Type} className="w-full" />

                {/* Hover subtext */}
                <div
                  className="absolute inset-0 flex flex-col justify-start opacity-0
                     group-hover:opacity-100 transition-all duration-500 p-7
                     bg-[#797979] group-hover:bg-[#131313]/60
                     group-hover:backdrop-blur-sm"
                >
                  <ul className="list-disc list-inside text-start space-y-1 text-white text-base">
                    {member.SubText.map((sub, i) => (
                      <li key={i}>{sub}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Type */}
              <div className="bg-primary rounded-b-xl mt-2 py-3 flex h-full justify-center">
                <h2 className="text-2xl font-Marcellus text-white">
                  {member.Type}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConditionTreat;
