import React from "react";
import KnowUs from "../../../assets/AboutUsPageImgs/KnowUs/KnowUs.png";
import Title from "../../../component/Title";

const KnowUsPage = () => {
  const DataList1 = [
    {
      SubText: (
        <>
          <p>
            <span className="text-primary">
              Om Sai Physiotherapy Clinic (Mississauga) Inc.
            </span>{" "}
            has been delivering high-quality physiotherapy, chiropractic care,
            massage therapy, and acupuncture services for over 15 years. Our
            team is committed to providing personalized, compassionate care
            tailored to each patient’s needs.
          </p>
          <p>
            In addition to our core services, we offer custom-made orthotics,
            compression stockings, and braces to support rehabilitation and
            enhance mobility. Our experienced professionals take a collaborative
            approach, ensuring the highest standards of care and working
            diligently to improve patient well-being. We accept a wide range of
            coverage options, including Extended Health Care (EHC), Motor
            Vehicle Accidents (MVA), and Workplace Injuries (WSIB), making our
            services accessible to all patients in need.
          </p>
          <p>
            Our clinic specializes in sports injuries, car accident-related
            injuries, chronic and acute pain, and mobility issues. We focus on
            comprehensive, patient-specific wellness and fitness programs
            designed to optimize recovery, restore function, and improve overall
            health.
          </p>
          <p>
            At Om Sai Physiotherapy Clinic, our goal is to help every patient
            move better, feel better, and achieve long-term wellness through
            expert care, modern facilities, and a compassionate, results-driven
            approach.
          </p>
        </>
      ),
    },
  ];
  const DataList2 = [
    {
      SubText: (
        <>
          <p className="text-primary">
            Physiotherapy: Restore, Recover & Live Pain-Free
          </p>
          <p>
            Physiotherapy focuses on improving health, mobility, and overall
            well-being by treating injuries, pain, and physical conditions
            through natural, evidence-based techniques—not medication. These
            techniques include therapeutic exercise, manual therapy, massage,
            stretching, and guided movement.Physiotherapy is used to help people
            recover from injuries, illnesses, surgery, poor posture, arthritis,
            and age-related conditions. It plays a vital role in restoring
            movement, building strength, reducing pain, and improving day-to-day
            function for individuals of all ages.
          </p>
          <p>
            Whether you're healing after surgery, managing chronic pain, or
            regaining mobility after an injury, physiotherapy supports your
            recovery through personalized exercise programs, manual therapy, and
            guided rehabilitation, which may include equipment such as bikes,
            treadmills, or pool-based therapy. The goal is simple—help you move
            better, live better, and return to your active lifestyle safely and
            confidently.
          </p>
        </>
      ),
    },
  ];

  const DataList3 = [
    {
      SubText: (
        <>
          <p className="text-primary">
            Physiotherapy: Restore, Recover & Live Pain-Free
          </p>
          <p>
            Om Sai Physiotherapy Centre Inc. welcomes you with compassionate,
            patient-focused care. Our dedicated team of licensed professionals
            provides personalized and comprehensive physiotherapy services
            designed to improve your mobility, reduce pain, and enhance your
            overall well-being. We understand that every patient is unique,
            which is why our treatment plans are carefully tailored to your
            specific needs and health goals. Our experienced physiotherapists
            follow a detailed, patient-centric approach to assess, diagnose, and
            treat a wide range of conditions—including sports injuries, chronic
            pain, workplace injuries, and mobility issues.
          </p>
          <p>
            At Om Sai Physiotherapy Centre, we believe healing is a partnership.
            Your commitment, combined with our expertise, helps you achieve the
            best possible outcome. From your first visit to full recovery, we
            are here to guide, support, and care for you every step of the way.
          </p>
          <p className="text-primary">
            Book your initial assessment today and begin your journey toward
            better health with Om Sai Physiotherapy Centre Inc.
          </p>
        </>
      ),
    },
  ];

  return (
    <section>
      <div className="container gap-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 ">
          {/* Left Section */}
          <div className="relative w-full">
            <img
              src={KnowUs}
              alt="Know Us"
              className="w-full h-auto object-cover"
            />

            <div
              className="
      absolute
      bottom-2 left-2
      sm:bottom-3 sm:left-3
      md:bottom-4 md:left-4
      lg:bottom-6 lg:left-6
      text-xs sm:text-sm md:text-base lg:text-lg
      text-white
      bg-black/50
      px-2 py-1
      rounded
    "
            >
              123
            </div>
          </div>

          {/* Right Section */}
          <div className="text-[#696969] ">
            <Title title="know us" />

            <h1 className="text-[#696969] text-2xl font-semibold mb-4">
              Om Sai Physiotherapy{" "}
              <span className="font-bold">Clinic (Mississauga) Inc.</span>
            </h1>

            {DataList1.map((item, index) => (
              <div key={index} className="space-y-5 text-[#696969]">
                {item.SubText}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5 py-10 ">
          {DataList2.map((item, index) => (
            <div key={index} className="space-y-5 text-[#696969]">
              {item.SubText}
            </div>
          ))}

          {DataList3.map((item, index) => (
            <div key={index} className="space-y-5 text-[#696969]">
              {item.SubText}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowUsPage;
