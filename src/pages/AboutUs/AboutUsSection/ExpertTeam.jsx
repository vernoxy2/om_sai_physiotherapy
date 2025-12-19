import React from "react";
import Title from "../../../component/Title";
import card1 from "../../../assets/AboutUsPageImgs/ExpertTeam/card1.svg";
import { FaTelegramPlane, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const ExpertTeam = () => {
  const teamData = [
    {
      id: 1,
      img: card1,
      name: "Dr. Ferdinand Brown",
      position: "Senior Physiotherapist",
      social: {
        telegram: "https://twitter.com/yourprofile",
        instagram: "https://www.instagram.com/yourprofile",
        facebook: "https://www.facebook.com/yourprofile",
        linkedin: "https://www.linkedin.com/in/yourprofile",
      },
    },
    {
      id: 2,
      img: card1,
      name: "Dr. Ferdinand Brown",
      position: "Senior Physiotherapist",
      social: {
        telegram: "https://twitter.com/yourprofile",
        instagram: "https://www.instagram.com/yourprofile",
        facebook: "https://www.facebook.com/yourprofile",
        linkedin: "https://www.linkedin.com/in/yourprofile",
      },
    },
    {
      id: 3,
      img: card1,
      name: "Dr. Ferdinand Brown",
      position: "Senior Physiotherapist",
      social: {
        telegram: "https://twitter.com/yourprofile",
        instagram: "https://www.instagram.com/yourprofile",
        facebook: "https://www.facebook.com/yourprofile",
        linkedin: "https://www.linkedin.com/in/yourprofile",
      },
    },
    {
      id: 4,
      img: card1,
      name: "Dr. Ferdinand Brown",
      position: "Senior Physiotherapist",
      social: {
        telegram: "https://twitter.com/yourprofile",
        instagram: "https://www.instagram.com/yourprofile",
        facebook: "https://www.facebook.com/yourprofile",
        linkedin: "https://www.linkedin.com/in/yourprofile",
      },
    },
  ];

  return (
    <section className="container mx-auto py-10">
      <Title title="Our Expert Team" />
      <h1 className="text-start mb-10">
        Dedicated Professionals Supporting Your Journey
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {teamData.map((member, index) => (
          <div key={index} className="relative group text-center bg-primary/20">
            <img
              src={member.img}
              alt={member.name}
              className="w-full rounded-xl"
            />

            {/* Social Icons */}
            <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-8 opacity-0 group-hover:opacity-100 transition bg-white p-4 rounded-md">
              <a href={member.social.telegram} target="_blank">
                <FaTelegramPlane className="text-[#696969] text-3xl items-center justify-between rounded-full" />
              </a>
              <a href={member.social.instagram} target="_blank">
                <AiFillInstagram className="text-[#696969] text-3xl items-center justify-between rounded-full" />
              </a>
              <a href={member.social.facebook} target="_blank">
                <FaFacebookF className="text-[#696969] text-3xl items-center justify-between rounded-full" />
              </a>
              <a href={member.social.linkedin} target="_blank">
                <FaLinkedinIn className="text-[#696969] text-3xl items-center justify-center rounded-full" />
              </a>
            </div>

            <div className="bg-white p-6">
              <h3 className="text-xl font-Marcellus text-primary">
                {member.name}
              </h3>
              <p className="text-sm text-[#696969] mt-1">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertTeam;
