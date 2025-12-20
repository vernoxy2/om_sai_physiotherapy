import React from "react";

const Title = ({ title, className = "" }) => {
  return (
    <div className={`grid grid-cols-[auto_1fr] gap-7 ${className}`}>
      {/* line */}
      <div className="flex items-center " >
        <div className="bg-primary w-16 h-0.5"></div>
        <div className="bg-primary rounded-full p-2"></div>
      </div>

      {/* title */}
      <div className="text-xl text-[#696969] font-Marcellus">
        {title}
      </div>
    </div>
  );
};

export default Title;
