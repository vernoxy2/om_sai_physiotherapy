import React, { useEffect, useState } from "react";
import Title from "../../../component/Title";
import PrimaryBtn from "../../../component/PrimaryBtn";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "Do your physiotherapists treat my condition?",
    answer: (
      <>
        Do your physiotherapists treat my condition?Do your physiotherapists
        treat my condition?
        <br /> Our therapists are well trained to evaluate and treat your
        condition. Our physiotherapists have graduated from accredited
        physiotherapy programs and are state-licensed. Depending on the
        university, the physiotherapy program is either a master’s or doctorate
        level degree. Physiotherapists have years of university-level training
        in anatomy, physiology, kinesiology (the study of joint movement),
        neurology, and many of the other medical sciences. You’re in good hands!
      </>
    ),
  },
  {
    question: "How Should I Dress?",
    answer:
      "Comfortable clothing is best. Depending on the injury, shorts or short sleeve can help us access the body part easier. If you forget we do have gowns available here.",
  },
  {
    question: "What do I need to bring with me?",
    answer: (
      <>
        We suggest that you bring in the following items when you come for your
        first visit:
        <br />
        • A copy of your complete medical history
        <br />
        • Previous medical evaluations from other medical providers
        (psychologists, doctors, surgeons, physical therapists, chiropractors,
        etc.)
        <br />
        • Recent MRI and X-rays (please bring the actual films)
        <br />
        • Referral slip, if you were referred by a physician or family doctor
        <br />• Photo ID
      </>
    ),
  },
  {
    question: "Shall I Have To Pay For My Treatments?",
    answer: (
      <>
        <p>
          We accept all insurance companies. If you do not have insurance, cash
          or credit card options are available.
        </p>
        <p className="mt-3">
          We can do electronic direct billing to many insurance companies,
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2  gap-x-10 list-disc pl-5">
          <li>Sun Life Financial</li>
          <li>Manulife Financial</li>
          <li>Blue Cross</li>
          <li>The Co-Operators</li>
          <li>Canada Life</li>
          <li>Industrial Alliance Insurance</li>
          <li>Desjardin</li>
          <li>Claim Secure Insurance</li>
          <li>Johnson Inc</li>
          <li>Manion</li>
          <li>Equitable Life Insurance</li>
        </ul>
      </>
    ),
  },
  {
    question: "Are we Covered by OHIP?",
    answer: "Om Sai Physiotherapy clinic is NOT an OHIP registered clinic",
  },
  {
    question: "Do I Need a Doctor's referral for physiotherapy ?",
    answer: (
      <>
        No, you do not need a doctor’s referral Physiotherapists are seen as
        primary health care providers and an appointment can be booked without a
        doctor’s prescription. However,
        <br />
        if you are utilizing your extended health care to pay for your sessions
        certain providers request a doctor’s referral in order to reimburse you
        for treatment provided. Therefore, it is important to first check with
        your extended health care provider for the specific requirements of your
        plan prior to booking a physiotherapy assessment to ensure reimbursement
        of payment.
      </>
    ),
  },
];

const FAQpage = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  });
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 container capitalize gap-9">
        {/* left sec */}
        <div className=" justify-start space-y-7 ">
          <Title title="FAQ" />
          <h1 className="w-full">
            Most Frequently{" "}
            <span className="text-[#696969]">
              Asked
              <br />
              Question And {""}
            </span>
            Answer
          </h1>
          <p className="xl:w-4/6 text-[#696969]">
            At OM SAI Physiotherapy Clinic, Mississauga Inc., we aim to make
            your physiotherapy experience simple and stress-free. Our FAQ
            section provides quick answers about our services, treatment
            process, appointments, and insurance.
            <br />
            If you don’t see your question here, our friendly team is always
            happy to help!
          </p>
          <div
            className="bg-[#EEEEEE] rounded-xl lg:w-5/6 space-y-7 p-5"
            data-aos="fade-down"
          >
            <h1 className=" text-primary">Still have a Question?</h1>
            <p className="text-[#696969]">
              Unsure about anything? Our experts are ready to assist you.
            </p>
            <PrimaryBtn
              href="mailto:"
              className="bg-[#EEEEEE] text-white xl:w-[35%] w-full xl:text-start rounded-full hover:bg-primary transition "
            >
              Send Email
            </PrimaryBtn>
          </div>
        </div>
        {/* rgt sec */}
        <div className="flex-1 flex flex-col gap-6 ">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#EEEEEE] rounded-xl border border-primary p-6"
              data-aos="fade-down"
            >
              <button
                className="flex justify-between items-center w-full text-left text-primary text-base md:text-lg focus:outline-none"
                onClick={() => handleToggle(idx)}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-6 h-6 flex-shrink-0 transform transition-transform duration-200 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === idx && (
                <p className="mt-2 text-[#696969] w-[87%] ">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQpage;
