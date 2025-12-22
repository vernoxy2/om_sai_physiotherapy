import React from "react";

const PhysioHead = ({ Heading, subtext, subtext1, WhiteText, BgImg }) => {
  return (
    <section
      style={{ backgroundImage: `url(${BgImg})` }}
      className="bg-no-repeat bg-cover bg-center flex items-center justify-start h-[480px] lg:h-[600px]"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="h-full flex flex-col items-start justify-center space-y-5">
          <h1 className="text-start w-[80%] leading-tight text-primary">
            {Heading}{" "}
            <span className="text-white">{WhiteText}</span>
          </h1>

          <p className="text-white font-lato lg:w-3/4 capitalize">
            {subtext}
          </p>
          <p className="text-white font-lato lg:w-3/4 capitalize">
            {subtext1}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhysioHead;
