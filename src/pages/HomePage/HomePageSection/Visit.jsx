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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "",
    message: "",
  });

  const [dateTime, setDateTime] = useState(null);
  const [error, setError] = useState("");
  const [errorField, setErrorField] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (errorField === name) {
      setError("");
      setErrorField("");
    }
  };

  const handleSubmit = () => {
    // Step 1: Check Name
    if (!formData.name.trim()) {
      setError("Please fill out this field.");
      setErrorField("name");
      return;
    }

    // Step 2: Check Email
    if (!formData.email.trim()) {
      setError("Please fill out this field.");
      setErrorField("email");
      return;
    } else if (!validateEmail(formData.email.trim())) {
      setError("Please enter a valid email.");
      setErrorField("email");
      return;
    }

    // Step 3: Check Service Type
    if (!formData.serviceType.trim()) {
      setError("Please fill out this field.");
      setErrorField("serviceType");
      return;
    }

    // Step 4: Check DateTime
    if (!dateTime) {
      setError("Please fill out this field.");
      setErrorField("dateTime");
      return;
    }

    // Step 5: Check Message
    if (!formData.message.trim()) {
      setError("Please fill out this field.");
      setErrorField("message");
      return;
    }

    // All fields filled - Submit
    setError("");
    setErrorField("");
    console.log("Form submitted successfully!", {
      ...formData,
      dateTime,
    });
    alert("Form submitted successfully!");
    // Reset form
    setFormData({
      name: "",
      email: "",
      serviceType: "",
      message: "",
    });
    setDateTime(null);
  };

  return (
    <section className="py-0">
      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-start container capitalize">
        {/* Left Content */}
        <div className=" space-y-4 md:space-y-5 w-[78%] ">
          <Title className="text-xl text-[#696969]" title="Plan Your Visit " />
          <h3 className="text-3xl md:text-4xl font-light text-primary lg:text-start  ">
            Take The First Step{" "}
            <span className="font-medium text-[#696969]">
              To A <br className="hidden md:block lg:hidden xl:block" />
              Pain-Free Life
            </span>
          </h3>
          <p className="text-[#696969] text-sm md:text-base ">
            Read what our patients have to say about their experiences at Om Sai
            Physiotherapy Clinic. Discover how our personalized physiotherapy
            care has helped them regain mobility, reduce pain, and improve
            overall health.
          </p>
          <p className="text-[#696969] text-sm md:text-base">
            We value your feedback! Please consider leaving a review on Google
            to share your experience and help others find trusted physiotherapy
            care.
          </p>
        </div>

        {/* Form */}
        <form className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full rounded-full text-sm focus:outline-none placeholder:text-[#696969] font-lato ${
                  errorField === "name" ? "border-2 border-red-500" : ""
                }`}
              />
              {errorField === "name" && (
                <p className="text-red-500 text-xs mt-1 ml-3">⚠ {error}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email ID*"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full rounded-full text-sm focus:outline-none placeholder:text-[#696969] font-lato ${
                  errorField === "email"
                    ? "border-2 border-red-500"
                    : "bg-[#EEEEEE]"
                }`}
              />
              {errorField === "email" && (
                <p className="text-red-500 text-xs mt-1 ml-3">⚠ {error}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="serviceType"
                placeholder="Type Of Service Enquiry*"
                value={formData.serviceType}
                onChange={handleInputChange}
                className={`w-full rounded-full bg-[#EEEEEE] text-sm focus:outline-none placeholder:text-[#696969] font-lato ${
                  errorField === "serviceType"
                    ? "border-2 border-red-500 bg-red-50"
                    : ""
                }`}
              />
              {errorField === "serviceType" && (
                <p className="text-red-500 text-xs mt-1 ml-3">⚠ {error}</p>
              )}
            </div>

            {/* Date & Time Picker */}
            <div className="flex flex-col">
              <DatePicker
                selected={dateTime}
                onChange={(date) => {
                  setDateTime(date);
                  if (errorField === "dateTime") {
                    setError("");
                    setErrorField("");
                  }
                }}
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
                placeholderText="Select Date & Time*"
                minDate={new Date()}
                className={`w-full rounded-full bg-[#EEEEEE] text-sm focus:outline-none  placeholder:text-[#696969] font-lato  ${
                  errorField === "dateTime"
                    ? "border-2 border-red-500 bg-red-50"
                    : ""
                }`}
              />
              {errorField === "dateTime" && (
                <p className="text-red-500 text-xs mt-1 ml-3">⚠ {error}</p>
              )}
            </div>
            <div className="md:col-span-2">
              <textarea
                name="message"
                placeholder="Enter Your Message Here*"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full rounded-2xl bg-[#EEEEEE] text-sm focus:outline-none  placeholder:text-[#696969] font-lato ${
                  errorField === "message"
                    ? "border-2 border-red-500 bg-red-50"
                    : ""
                }`}
              />
              {errorField === "message" && (
                <p className="text-red-500 text-xs mt-1 ml-3">⚠ {error}</p>
              )}
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="md:col-span-2"
            >
              <PrimaryBtn className="w-full gap-0">Schedule Your Visit</PrimaryBtn>
            </button>
          </div>
        </form>
      </div>
      <img src={cvrImg} alt="curve" className="w-full container " />
      {/* slider  */}

      <div
        style={{ backgroundImage: `url(${SliderImg})` }}
        className="relative overflow-hidden py-5 bg-no-repeat bg-cover bg-center"
      >
        <div className="flex gap-10 animate-marquee-left whitespace-nowrap container px-0">
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
