import React, { useState } from "react";
import coverImg from "../../../assets/ContcatPageImgs/Message/coverImg.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Title from "../../../component/Title";
import PrimaryBtn from "../../../component/PrimaryBtn";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaClock } from "react-icons/fa6";


const Message = () => {
  const [dateTime, setDateTime] = useState(null);
  const contactdata = [
    {
      id: 1,
      icon: <FaLocationDot />,
      info: (
        <>
          3960 Grand Park Drive, Unit 3, Mississauga,
          <br /> Ontario L5B 4M6, Canada.
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
        "Mon | 02:00 P.M. – 07:00 A.M.",
        "Tue | 02:00 A.M. – 07:00 P.M.",
        "Wed | 02:00 P.M. – 07:00 P.M.",
        "Thu | 02:00 A.M. – 07:00 P.M.",
        "Fri | 02:00 P.M. – 07:00 P.M.",
        "Sat | 02:00 A.M. – 07:00 P.M.",
        "Sun | Closed",
      ],
    },
  ];
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-20 items-start container ">
        {/* Left Content */}
        <div className="space-y-3">
          <Title
            className="text-xl text-[#696969] "
            title="Reach Out For Massage"
          />
          <h1 className="text-priamry">
            Relief Awaits,&nbsp;<span className="text-[#696969]">Book Now</span>
          </h1>
          <p className="text-[#696969] text-xl mb-4">
            Quick relief and lasting comfort begin here schedule your
            appointment now.
          </p>
          <ul>
            {contactdata.map((item) => (
              <li key={item.id} className="flex gap-5 py-1">
                <div className="text-white text-3xl bg-primary rounded-full p-2 h-fit">
                  {item.icon}
                </div>
                {item.id === 4 ? (
                  <div className=" p-2 ">
                    <h4 className="font-Marcellus text-white bg-primary rounded-sm text-center py-2">
                      {item.Heading}
                    </h4>
                    <ul className="text-[#696969] text-xl space-y-2">
                      {item.Hours.map((hour, index) => (
                        <li key={index}>{hour}</li>
                      ))}
                    </ul>
                  </div>
                ) : item.contacts ? (
                  <div className="flex items-center underline text-[#696969] gap-2 text-xl font-Lato">
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
                    className="text-[#696969] text-xl underline font-Lato"
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
        <form className="bg-white space-y-7 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full rounded-full border border-primary  text-sm focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email ID*"
              className="w-full rounded-full bg-[#EEEEEE]  text-sm focus:outline-none"
            />

            <input
              type="text"
              placeholder="Type Of Service Enquiry*"
              className="w-full rounded-full bg-[#EEEEEE]  text-sm focus:outline-none"
            />

            {/* Date & Time Picker */}
            <DatePicker
              selected={dateTime}
              onChange={(date) => setDateTime(date)}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
              placeholderText="Select Date & Time*"
              className="w-full rounded-full bg-[#EEEEEE]  text-sm focus:outline-none"
            />
          </div>

          <textarea
            placeholder="Enter Your Message Here*"
            rows={4}
            className="w-full rounded-2xl bg-[#EEEEEE]  text-sm focus:outline-none "
          />

          <PrimaryBtn>Schedule Your Visit</PrimaryBtn>
        </form>
      
      </div>
      <div className=" container w-auto">
        <img src={coverImg} alt="coverImg" className="border bg-center"/>
      </div>
    </section>
  );
};

export default Message;
