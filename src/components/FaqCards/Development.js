import React, { useState, useEffect } from "react";
import Section from "../Section";
import minusCircle from "../../assets/images/minus-circle.png";
import plusCircle from "../../assets/images/plus-circle.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Development = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleVisibility = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section color="bg-slate-950">
      <div className="text-center ml-32 pt-8 pb-20 h-auto sm:ml-[4%]">
        {/* Heading */}
        <div
          className="max-w-[720px] sm:w-auto mx-auto flex items-start"
          data-aos="fade-up"
        >
          <div className="flex-none text-white text-lg font-semibold leading-7 mr-2 text-left sm:w-[300px] sm:text-sm">
            What technologies do you use for website/app development?
          </div>
          <button button onClick={() => toggleVisibility(0)}>
            <img
              src={openIndex === 0 ? minusCircle : plusCircle}
              className="max-w-full h-5 left-[86%] absolute"
            ></img>
          </button>
        </div>

        {/* Actual Paragraph */}
        <div
          className={`max-w-[720px] sm:w-auto sm:pr-7 sm:-ml-1 pr-36 mx-auto text-justify text-neutral-400 text-opacity-60 text-sm font-normal leading-normal mt-2 transition-max-h duration-500 ease-in-out ${
            openIndex === 0 ? "max-h-[500px]" : "max-h-0 overflow-hidden"
          }`}
        >
          We leverage modern technologies such as HTML5, CSS3, JavaScript frameworks like React or Angular for frontend development, and backend technologies like Node.js or Django. Our choice of technology depends on project requirements and scalability needs.
        </div>
        <div
          className="w-[643px] mt-4 h-px ml-[216px] sm:ml-0 sm:mx-auto sm:w-[350px] bg-gray-500"
          data-aos="fade-up"
        />

        {/* Heading */}
        <div
          className="max-w-[720px] sm:w-auto mx-auto flex items-start pt-4"
          data-aos="fade-up"
        >
          <div className="flex-none text-white text-lg font-semibold leading-7 mr-2 sm:text-sm text-left sm:w-[300px]">
          Can you integrate third-party services or APIs into my website/app?
          </div>
          <button onClick={() => toggleVisibility(1)}>
            <img
              src={openIndex === 1 ? minusCircle : plusCircle}
              className="max-w-full h-5 left-[86%] absolute"
            ></img>
          </button>
        </div>

        {/* Actual Paragraph */}
        <div
          className={`max-w-[720px] sm:w-auto sm:pr-7 sm:-ml-1 pr-36 mx-auto text-justify text-neutral-400 text-opacity-60 text-sm font-normal leading-normal mt-2 transition-max-h duration-500 ease-in-out ${
            openIndex === 1 ? "max-h-[500px]" : "max-h-0 overflow-hidden"
          }`}
        >
          Yes, we have experience integrating various third-party services and APIs, including payment gateways, social media platforms, mapping services, and more. Integration enhances functionality and provides seamless user experiences.
        </div>
        <div
          className="w-[643px] mt-4 h-px ml-[216px] sm:ml-0 sm:mx-auto sm:w-[350px] bg-gray-500"
          data-aos="fade-up"
        />

        {/* Heading */}
        <div
          className="max-w-[720px] sm:w-auto mx-auto flex items-start pt-4"
          data-aos="fade-up"
        >
          <div className="flex-none text-white text-lg font-semibold leading-7 mr-2 sm:text-sm text-left sm:w-[300px]">
          How do you ensure my website/app is secure?
          </div>
          <button onClick={() => toggleVisibility(2)}>
            <img
              src={openIndex === 2 ? minusCircle : plusCircle}
              className="max-w-full h-5 left-[86%] absolute"
            ></img>
          </button>
        </div>

        {/* Actual Paragraph */}
        <div
          className={`max-w-[720px] sm:w-auto sm:pr-7 sm:-ml-1 pr-36 mx-auto text-justify text-neutral-400 text-opacity-60 text-sm font-normal leading-normal mt-2 transition-max-h duration-500 ease-in-out ${
            openIndex === 2 ? "max-h-[500px]" : "max-h-0 overflow-hidden"
          }`}
        >
          We implement industry-standard security protocols such as HTTPS, data encryption, and protection against common vulnerabilities like SQL injection and cross-site scripting. Regular security audits and updates are also part of our maintenance plan
        </div>
        <div
          className="w-[643px] mt-4 h-px ml-[216px] sm:ml-0 sm:mx-auto sm:w-[350px] bg-gray-500"
          data-aos="fade-up"
        />

        {/* Heading */}
        <div
          className="max-w-[720px] sm:w-auto mx-auto flex items-start pt-4"
          data-aos="fade-up"
        >
          <div className="flex-none text-white text-lg font-semibold leading-7 mr-2 sm:text-sm text-left sm:w-[300px]">
          How do you ensure my website or app is responsive?
          </div>
          <button onClick={() => toggleVisibility(3)}>
            <img
              src={openIndex === 3 ? minusCircle : plusCircle}
              className="max-w-full h-5 left-[86%] absolute"
            ></img>
          </button>
        </div>

        {/* Actual Paragraph */}
        <div
          className={`max-w-[720px] sm:w-auto sm:pr-7 sm:-ml-1 pr-36 mx-auto text-justify text-neutral-400 text-opacity-60 text-sm font-normal leading-normal mt-2 transition-max-h duration-500 ease-in-out ${
            openIndex === 3 ? "max-h-[500px]" : "max-h-0 overflow-hidden"
          }`}
        >
          We use a mobile-first approach, ensuring that the design and development prioritize smaller screens. Additionally, we extensively test across various devices and screen sizes to ensure consistent functionality and usability.
        </div>
        <div
          className="w-[643px] mt-4 h-px ml-[216px] sm:ml-0 sm:mx-auto sm:w-[350px] bg-gray-500"
          data-aos="fade-up"
        />

        
      </div>
    </Section>
  );
};

export default Development;
