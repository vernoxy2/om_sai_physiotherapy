import React, { useState } from "react";
import NavLogo from "../assets/HomePageImgs/NavLogo.svg";
import PrimaryBtn from "./PrimaryBtn";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";

const FooterData = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError(validateEmail(value));
  };

  const handleBlur = () => {
    setError(validateEmail(email));
  };

  const ProjectLinks = [
    {
      id: 1,
      title: "Custom Orthotics",
      // link: "/projects/aura-redefine_living",
    },
    {
      id: 2,
      title: "Compression Stockings",
      // link: "/projects/orange_city",
    },
    {
      id: 3,
      title: "Custom Knee Braces",
      // link: "/projects/mannat_residency",
    },
    {
      id: 4,
      title: "Back Braces",
      // link: "/projects/mannat_residency",
    },
    {
      id: 5,
      title: "Elbow Braces",
      // link: "/projects/mannat_residency",
    },
    {
      id: 6,
      title: "Ankle Braces",
      // link: "/projects/mannat_residency",
    },
    {
      id: 7,
      title: "Wrist Braces",
      // link: "/projects/mannat_residency",
    },
    {
      id: 8,
      title: "Cervical Pillows",
      // link: "/projects/mannat_residency",
    },
  ];

  const ServiceLinks = [
    {
      id: 1,
      title: "Physiotherapy in North York",
      // link: "/projects/aura-redefine_living",
    },
    {
      id: 2,
      title: "Chiropractic Care",
      // link: "/projects/orange_city",
    },
    {
      id: 3,
      title: "Massage Therapy",
      // link: "/projects/mannat_residency",
    },
    {
      id: 4,
      title: "Acupuncture Treatment",
      // link: "/projects/mannat_residency",
    },
    {
      id: 5,
      title: "Shockwave Therapy",
      // link: "/projects/mannat_residency",
    },
    {
      id: 6,
      title: "Spinal Traction",
      // link: "/projects/mannat_residency",
    },
  ];

  const contactdata = [
    {
      id: 1,
      icon: <FaLocationDot />,
      info: "3960 Grand Park Drive, Unit 3, Mississauga, Ontario L5B 4M6, Canada.",
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
  ];
  return (
    <section className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-6 gap-2  ">
        {/* col1 */}
        <div className="text-white flex flex-col gap-5 ">
          <img src={NavLogo} alt="Logo" className="w-[80%]" />
          <p className="text-white w-[85%] font-Lato">
            We Support Your Recovery By Restoring Strength And Movement, Guiding
            You Toward Wellness And Independence Every Day.
          </p>
          <hr className="h-1 w-[80%] bg-white" />
          <h2 className="text-xl font-Marcellus ">Stay Informed</h2>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email ID*"
            className={` required px-4 py-3 text-base rounded-full w-[80%] outline-none 
        //   ${error ? "border-primary" : "border-gray-300 "}
        //   focus:ring-2 focus:ring-white`}
          />
          {error && <p className="text-primary text-sm ">{error}</p>}
          <PrimaryBtn className="w-[80%] text-base ">Subscribe Now</PrimaryBtn>
        </div>

        {/* col2 */}
        <div className="text-white">
          <h2 className="text-xl font-Marcellus ">Products</h2>
          <ul>
            {ProjectLinks.map((item) => (
              <li key={item.id} className="flex items-start gap-3 py-1">
                <a
                  href={item.link}
                  className="text-stride text-4xl lg:text-5xl text-start"
                >
                  <p className=" text-white font-Marcellus">{item.title}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* col3 */}
        <div className="text-white">
          <h2 className="text-xl font-Marcellus ">Services</h2>
          <ul>
            {ServiceLinks.map((item) => (
              <li key={item.id} className="flex items-start gap-3 py-1">
                <a
                  href={item.link}
                  className="text-white text-4xl lg:text-5xl text-start"
                >
                  <p className=" text-white font-Marcellus font-Lato">{item.title}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* col4 */}
        <div className="flex flex-col items-start gap-3 lg:px-4">
          <h2 className=" text-white font-Marcellus ps-1.5 text-xl">
            Contact Us
          </h2>
          <ul>
            {contactdata.map((item) => (
              <li key={item.id} className="flex gap-5 py-2">
                <div className="text-[#696969] text-3xl bg-white rounded-full p-2 h-fit">
                  {item.icon}
                </div>

                <div className="flex flex-col gap-1">
                  {item.contacts ? (
                    item.contacts.map((contact, index) => (
                      <a
                        key={index}
                        href={contact.link}
                        className="text-white text-base font-Lato "
                      >
                        {contact.label} {contact.info}
                      </a>
                    ))
                  ) : (
                    <a
                      href={item.link}
                      className="text-white text-base font-Lato "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.info}
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FooterData;
