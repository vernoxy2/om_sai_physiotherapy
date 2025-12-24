import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Title from "../../../component/Title";
import PrimaryBtn from "../../../component/PrimaryBtn";
import cvrImg from "../../../assets/HomePageImgs/Trustus/coverImg.png";
import SliderImg from "../../../assets/HomePageImgs/Trustus/SliderImg.png";
import { TiStarburst } from "react-icons/ti";

const Visit = () => {
  const TherapyData = [
    {
      id: 1,
      value: "Neurological Rehabilitation",
    },
    {
      id: 2,
      value: "Brain And Nerve Therapy",
    },
    {
      id: 3,
      value: "Joint Care Therapy",
    },
    {
      id: 4,
      value: "Bone And Muscle Therapy",
    },
    {
      id: 5,
      value: "Cardiovascular Rehabilitation",
    },
  ];
  const [dateTime, setDateTime] = useState(null);
  const [errors, setErrors] = useState({});
  const [errorMessages, setErrorMessages] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const serviceInput = document.querySelector('input[name="serviceType"]');
    const messageInput = document.querySelector('textarea[name="message"]');

    const newErrors = {};
    const newMessages = {};

    // Step 1: Check Name
    if (!nameInput || !nameInput.value.trim()) {
      newErrors.name = true;
      newMessages.name = "Please fill out this field.";
      setErrors(newErrors);
      setErrorMessages(newMessages);
      return;
    }

    // Step 2: Check Email
    if (!emailInput || !emailInput.value.trim()) {
      newErrors.email = true;
      newMessages.email = "Please fill out this field.";
      setErrors(newErrors);
      setErrorMessages(newMessages);
      return;
    } else if (!validateEmail(emailInput.value.trim())) {
      newErrors.email = true;
      newMessages.email = "Please enter a valid email.";
      setErrors(newErrors);
      setErrorMessages(newMessages);
      return;
    }

    // Step 3: Check Service Type
    if (!serviceInput || !serviceInput.value.trim()) {
      newErrors.serviceType = true;
      newMessages.serviceType = "Please fill out this field.";
      setErrors(newErrors);
      setErrorMessages(newMessages);
      return;
    }

    // Step 4: Check DateTime
    if (!dateTime) {
      newErrors.dateTime = true;
      newMessages.dateTime = "Please fill out this field.";
      setErrors(newErrors);
      setErrorMessages(newMessages);
      return;
    }

    // Step 5: Check Message
    if (!messageInput || !messageInput.value.trim()) {
      newErrors.message = true;
      newMessages.message = "Please fill out this field.";
      setErrors(newErrors);
      setErrorMessages(newMessages);
      return;
    }

    // All fields filled - Clear errors
    setErrors({});
    setErrorMessages({});
    console.log("Form submitted successfully!");
  };

  const clearFieldError = (fieldName) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: false,
    }));
    setErrorMessages((prevMessages) => ({
      ...prevMessages,
      [fieldName]: "",
    }));
  };

  return (
    <section>
      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start container">
        {/* Left Content */}
        <div className="space-y-4 lg:w-[80%]">
          <Title className="text-xl text-[#696969]" title="Plan Your Visit " />
          <h3 className="text-3xl md:text-4xl font-light text-primary lg:text-start  ">
            Take The First Step <br />
            <span className="font-medium text-[#696969]">
              To A Pain-Free Life
            </span>
          </h3>
          <p className="text-[#696969] text-sm ">
            Read what our patients have to say about their experiences at Om Sai
            Physiotherapy Clinic. Discover how our personalized physiotherapy
            care has helped them regain mobility, reduce pain, and improve
            overall health.
          </p>
          <p className="text-[#696969] text-sm">
            We value your feedback! Please consider leaving a review on Google
            to share your experience and help others find trusted physiotherapy
            care.
          </p>
        </div>

        {/* Form */}
        <form className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                onChange={() => clearFieldError("name")}
                className="w-full rounded-full border px-5 py-3 text-sm focus:outline-none"
              />
              {errors.name && (
                <div className="absolute left-4 top-full mt-2 bg-white text-xs px-3 py-2 rounded whitespace-nowrap border border-gray-300 flex items-center gap-2 z-10 animate-in fade-in slide-in-from-top-2 duration-300">
                  <span>⚠️</span>
                  <span className="text-[#696969]">{errorMessages.name}</span>
                </div>
              )}
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email ID*"
                onChange={() => clearFieldError("email")}
                className="w-full rounded-full px-5 py-3 text-sm focus:outline-none"
              />
              {errors.email && (
                <div className="absolute left-4 top-full mt-2 bg-white text-xs px-3 py-2 rounded whitespace-nowrap border border-gray-300 flex items-center gap-2 z-10 animate-in fade-in slide-in-from-top-2 duration-300">
                  <span>⚠️</span>
                  <span className="text-[#696969]">{errorMessages.email}</span>
                </div>
              )}
            </div>
            <div className="relative">
              <input
                type="text"
                name="serviceType"
                placeholder="Type Of Service Enquiry*"
                onChange={() => clearFieldError("serviceType")}
                className="w-full rounded-full bg-[#EEEEEE] px-5 py-3 text-sm focus:outline-none"
              />
              {errors.serviceType && (
                <div className="absolute left-4 top-full mt-2 bg-white text-xs px-3 py-2 rounded whitespace-nowrap border border-gray-300 flex items-center gap-2 z-10 animate-in fade-in slide-in-from-top-2 duration-300">
                  <span>⚠️</span>
                  <span className="text-[#696969]">{errorMessages.serviceType}</span>
                </div>
              )}
            </div>
            <div className="relative w-full">
              <DatePicker
                selected={dateTime}
                onChange={(date) => {
                  setDateTime(date);
                  clearFieldError("dateTime");
                }}
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
                placeholderText="Select Date & Time*"
                className="w-full rounded-full bg-[#EEEEEE] px-5 py-3 text-sm focus:outline-none"
                wrapperClassName="w-full"
              />
              {errors.dateTime && (
                <div className="absolute left-4 top-full mt-2 bg-white text-xs px-3 py-2 rounded whitespace-nowrap border border-gray-300 flex items-center gap-2 z-10 animate-in fade-in slide-in-from-top-2 duration-300">
                  <span>⚠️</span>
                  <span className="text-[#696969]">{errorMessages.dateTime}</span>
                </div>
              )}
            </div>
          </div>
          <div className="relative">
            <textarea
              name="message"
              placeholder="Enter Your Message Here*"
              onChange={() => clearFieldError("message")}
              rows={4}
              className="w-full rounded-2xl bg-[#EEEEEE] px-5 py-4 text-sm focus:outline-none mb-4"
            />
            {errors.message && (
              <div className="absolute left-4 top-full mb-1 bg-white text-xs px-3 py-2 rounded whitespace-nowrap border border-gray-300 flex items-center gap-1 z-10 animate-in fade-in slide-in-from-top-2 duration-300">
                <span>⚠️</span>
                <span className="text-[#696969]">{errorMessages.message}</span>
              </div>
            )}
          </div>
          <PrimaryBtn className="w-full" onClick={handleSubmit}>
            Schedule Your Visit
          </PrimaryBtn>
        </form>
      </div>
      <img src={cvrImg} alt="curve" className="w-full " />
      {/* slider  */}

      <div
        style={{ backgroundImage: `url(${SliderImg})` }}
        className="relative overflow-hidden  py-5"
      >
        <div className="flex gap-10 animate-marquee-left whitespace-nowrap">
          {[...TherapyData, ...TherapyData].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-white">
              <TiStarburst className="text-white" />
              <h4>{item.value}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Visit;