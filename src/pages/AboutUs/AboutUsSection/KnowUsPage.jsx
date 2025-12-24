import React, { useEffect, useRef, useState } from "react";
import KnowUs from "../../../assets/AboutUsPageImgs/KnowUs/KnowUs.png";
import Title from "../../../component/Title";

const KnowUsPage = () => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let start = 0;
          const end = 15;
          const duration = 2000;
          const interval = 30;
          const step = Math.ceil(end / (duration / interval));

          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              start = end;
              clearInterval(timer);
            }
            setCount(start);
          }, interval);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const DataList1 = [
    {
      SubText: (
        <>
          <p>
            <span className="text-primary font-bold">
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
          <p className="text-primary font-bold">
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
          <p className="text-primary font-bold">
            Physiotherapy: Restore, Recover & Live Pain-Free
          </p>
          <p>
            Om Sai Physiotherapy Centre Inc. welcomes you with compassionate,
            patient-focused care. Our dedicated team of licensed professionals
            provides personalized and comprehensive physiotherapy services
            designed to improve your mobility, reduce pain, and enhance your
            overall well-being.<br/>We understand that every patient is unique,
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
          <p className="text-primary font-bold">
            Book your initial assessment today and begin your journey toward
            better health with Om Sai Physiotherapy Centre Inc.
          </p>
        </>
      ),
    },
  ];

  return (
    <section>
      <div className="container gap-7 capitalize">
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
                    lg:bottom-8 lg:left-4
                    text-xs sm:text-sm md:text-base lg:text-lg
                    text-white ring-1 ring-white
                    bg-white
                    rounded-2xl
                  "
            >
              <span
                className="relative inline-flex rounded-2xl py-4 px-2
                 bg-gradient-to-tr 
                bg-primary "
              >
                <span
                  className="flex flex-col items-center justify-center 
                   rounded-2xl bg-black/0 
                   px-7 py-4 text-center"
                >
                  <h1
                    className="text-white  font-bold"
                    ref={counterRef}
                  >
                    {count}+
                  </h1>
                  <h4 className="text-white">Years Expert Care</h4>
                </span>
              </span>
            </div>
          </div>

          {/* Right Section */}
          <div className="text-[#696969] space-y-7 ">
            <Title title="Get to Know Us" />
            <h1 className=" ">
              Om Sai Physiotherapy{" "}
              <span className="text-[#696969]">Clinic (Mississauga) Inc.</span>
            </h1>

            {DataList1.map((item, index) => (
              <div key={index} className="space-y-5 text-[#696969] w-full lg:w-[90%] ">
                {item.SubText}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5 py-10  w-full lg:w-[91%]">
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
        <div className="bg-primary w-full h-0.5"></div>
      </div>
    </section>
  );
};

export default KnowUsPage;
