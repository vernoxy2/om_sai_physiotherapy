import React, { useState } from "react";
import NavLogo from "../assets/HomePageImgs/NavLogo.svg";
import PrimaryBtn from "./PrimaryBtn";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { BiLogoFacebook } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import { FaWhatsappSquare } from "react-icons/fa";

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
      link: "/products?product=orthotics",
    },
    {
      id: 2,
      title: "Compression Stockings",
      link: "/products?product=compression",
    },
    {
      id: 3,
      title: "Custom Knee Braces",
      link: "/products?product=kneeBraces",
    },
    {
      id: 4,
      title: "Back Braces",
      link: "/products?product=backBraces",
    },
    {
      id: 5,
      title: "Elbow Braces",
      link: "/products?product=elbowbraces",
    },
    {
      id: 6,
      title: "Ankle Braces",
      link: "/products?product=anklebraces",
    },
    {
      id: 7,
      title: "Wrist Braces",
      link: "/products?product=wristbraces",
    },
    {
      id: 8,
      title: "Cervical Pillows",
      link: "/products?product=cervical",
    },
  ];

  const ServiceLinks = [
    {
      id: 1,
      title: "Physiotherapy in Mississauga",
      link: "/services/physiotherapy-mississauga",
    },
    {
      id: 2,
      title: "Chiropractic Care",
      link: "/services/chiropractic-care",
    },
    {
      id: 3,
      title: "Massage Therapy",
      link: "/services/massage-therapy",
    },
    {
      id: 4,
      title: "Acupuncture Treatment",
      link: "/services/acupuncture-treatment",
    },
    {
      id: 5,
      title: "Shockwave Therapy",
      link: "/services/shockwave-therapy",
    },
    {
      id: 6,
      title: "Spinal Traction",
      link: "/services/spinal-traction",
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

  const Socialdata = [
    {
      id: 1,
      icon: <BiLogoTelegram />,
      // link: "https://t.me/your_username",
    },
    {
      id: 2,
      icon: <BiLogoFacebook />,
      // link: "https://www.facebook.com/profile.php?id=61577804857599",
    },
    {
      id: 3,
      icon: <RiInstagramFill />,
      // link: "https://www.instagram.com/striderealty/",
    },
    {
      id: 4,
      icon: <FaLinkedinIn />,
      // link: "https://wa.me/919879011576",
    },
    {
      id: 5,
      icon: <FaYoutube />,
      // link: "https://wa.me/919879011576",
    },
  ];

  return (
    <section className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-8 capitalize ">
        {/* col1 */}
        <div className="text-white flex flex-col gap-5 ">
          <img src={NavLogo} alt="Logo" className="" />
          <p className="text-white">
            We support your recovery by restoring strength and movement, guiding
            you toward wellness and independence every day.
          </p>
          <hr className="h-0.5  bg-white" />
          <h4 className="text-xl font-Marcellus ">Stay Informed</h4>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email ID*"
            className={` required px-4 py-3 text-base rounded-full outline outline-white bg-transparent placeholder:text-white 
          ${error ? "border-primary" : "border-gray-300 "}
         focus:ring-2 focus:ring-white`}
          />
          {error && <p className="text-primary text-sm ">{error}</p>}
          <PrimaryBtn className=" text-base ">Subscribe Now</PrimaryBtn>
        </div>

        {/* col2 */}
        <div className="text-white space-y-4  flex flex-col lg:mx-auto">
          <h4 className="font-Marcellus ">Products</h4>
          <ul className="">
            {ProjectLinks.map((item) => (
              <li key={item.id} className="flex items-start gap-3 py-1">
                <a
                  href={item.link}
                  className="text-primary text-4xl lg:text-5xl text-start"
                >
                  <p className=" text-white font-lato">{item.title}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* col3 */}
        <div className="text-white space-y-4 ">
          <h4 className=" font-Marcellus ">Services</h4>
          <ul>
            {ServiceLinks.map((item) => (
              <li key={item.id} className="flex items-start gap-3 py-1">
                <a
                  href={item.link}
                  className=""
                >
                  <p className=" text-white font-Lato">{item.title}</p>
                </a>
              </li>
            ))}
          </ul>
          <div className="space-y-3 pt-5">
            <h4 className="pb-1">clinic Hours</h4>
            <p>mon -FRI -10 am - 7pm</p>
            <p>Saturday-9am-3pm</p>
            <p>Sunday - Closed,</p>
          </div>
        </div>

        {/* col4 */}
        <div className="flex flex-col items-start gap-3 ">
          <h4 className=" text-white font-Marcellus ps-1.5 ">Contact Us</h4>
          <ul>
            {contactdata.map((item) => (
              <li key={item.id} className="flex gap-3 py-2">
                <div className="text-[#696969] lg:text-3xl text-2xl bg-white rounded-full p-2 h-fit ">
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
                      className="text-white text-base font-lato "
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

          <div className="space-y-4">
            <h4 className="text-white">Follow Us</h4>
            <ul className="flex items-center justify-center text-center space-x-6 font-lato">
              {Socialdata.map((item) => (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  key={item.id}
                  className=" lg:text-3xl text-2xl bg-white text-[#696969] rounded-full p-1 "
                >
                  {item.icon}
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterData;
