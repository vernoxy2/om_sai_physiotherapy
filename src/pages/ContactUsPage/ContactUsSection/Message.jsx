import React, { useEffect, useState } from "react";
import coverImg from "../../../assets/ContcatPageImgs/Message/coverImg.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Title from "../../../component/Title";
import PrimaryBtn from "../../../component/PrimaryBtn";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaClock } from "react-icons/fa6";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const Message = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "",
    message: "",
  });

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
  const [dateTime, setDateTime] = useState(null);
  const [hours, setHours] = useState({
    monday: "Loading...",
    tuesday: "Loading...",
    wednesday: "Loading...",
    thursday: "Loading...",
    friday: "Loading...",
    saturday: "Loading...",
    sunday: "Loading...",
  });

  // 👇 FETCH HOURS FROM FIREBASE
  useEffect(() => {
    const fetchHours = async () => {
      try {
        const docRef = doc(db, "settings", "hoursOfOperation");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setHours(docSnap.data());
        }
      } catch (err) {
        console.error("Error fetching hours:", err);
      }
    };

    fetchHours();
  }, []);

  const contactdata = [
    {
      id: 1,
      icon: <FaLocationDot />,
      info: (
        <>
          3960 Grand Park Drive, Unit 3, Mississauga,
          <br className="hidden md:block" /> Ontario L5B 4M6, Canada.
        </>
      ),
      // link: "https://maps.app.goo.gl/Sqxhzve5pVLM7r9D6",
    },

    {
      id: 2,
      icon: <MdCall />,
      contacts: [
        {
          info: "905 804 1117",
          link: "tel:+19058041117",
        },
        {
          info: "416 640 7360",
          link: "tel:+14166407360",
        },
        {
          label: "Fax :",
          info: "416 352 1552",
          link: "tel:+14163521552",
        },
      ],
    },
    {
      id: 3,
      icon: <CiMail />,
      title: "Email",
      info: "omsaimississauga@yahoo.ca",
      link: "mailto:omsaimississauga@yahoo.ca",
    },
    {
      id: 4,
      icon: <FaClock />,
      title: "Clock",
      Heading: "Hours of Operation",
      Hours: [
        `Mon | ${hours.monday}`,
        `Tue | ${hours.tuesday}`,
        `Wed | ${hours.wednesday}`,
        `Thu | ${hours.thursday}`,
        `Fri | ${hours.friday}`,
        `Sat | ${hours.saturday}`,
        `Sun | ${hours.sunday}`,
      ],
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start container">
        {/* Left Content */}
        <div className=" space-y-2 md:space-y-3 capitalize">
          {/* Head Tile */}
          <Title
            className="text-xl text-[#696969] "
            title="Reach Out For Massage"
          />
          <h1 className="text-priamry">
            Relief Awaits,&nbsp;<span className="text-[#696969]">Book Now</span>
          </h1>
          <p className="text-[#696969] mb-4">
            Quick relief and lasting comfort begin here schedule your
            appointment now.
          </p>

          <ul className="py-4 md:py-8 space-y-4 md:space-y-7">
            {contactdata.map((item) => (
              <li key={item.id} className="flex gap-5 items-center ">
                <div className="text-white text-3xl bg-primary rounded-full p-2 h-fit">
                  {item.icon}
                </div>
                {item.id === 4 ? (
                  <div className=" p-2 ">
                    <h4 className=" text-xl text-white bg-primary rounded-sm text-center py-2">
                      {item.Heading}
                    </h4>
                    <ul className="text-[#696969] text-base md:text-xl space-y-2 pt-4">
                      {item.Hours.map((hour, index) => (
                        <li key={index}>{hour}</li>
                      ))}
                    </ul>
                  </div>
                ) : item.contacts ? (
                  <div className="flex items-center  text-[#696969] gap-2 text-xl font-Marcellus">
                    {item.contacts
                      .filter((contact) => !contact.label) // removes Fax
                      .map((contact, index, arr) => (
                        <React.Fragment key={index}>
                          <a href={contact.link}>{contact.info}</a>
                          {index < arr.length - 1 && <span>|</span>}
                        </React.Fragment>
                      ))}
                  </div>
                ) : (
                  <a
                    href={item.link}
                    className="text-[#696969] text-xl  font-Marcellus"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.info}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <form className="bg-white ">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full rounded-full text-sm focus:outline-none placeholder:text-[#696969] font-lato${
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
                className={`w-full rounded-full bg-[#EEEEEE] text-sm focus:outline-none  placeholder:text-[#696969] font-lato ${
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
                className={`w-full rounded-full bg-[#EEEEEE] text-sm focus:outline-none  placeholder:text-[#696969] font-lato ${
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
              <PrimaryBtn className="w-full">Schedule Your Visit</PrimaryBtn>
            </button>
          </div>
        </form>
      </div>
      <div className=" container w-full">
        <img src={coverImg} alt="coverImg" className=" w-full" />
      </div>
    </section>
  );
};

export default Message;
