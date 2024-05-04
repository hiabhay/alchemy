import React, { useState, useEffect } from "react";
import Section from "../Section";
import minusCircle from "../../assets/images/minus-circle.png";
import plusCircle from "../../assets/images/plus-circle.png";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Development = () => {
  useEffect(() =>{
    Aos.init({duration: 500});
  }, [])
  const [openIndex, setOpenIndex] = useState(null);

  const toggleVisibility = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section color="bg-slate-950">
      <div className="text-center ml-32 pt-8 pb-20 h-auto sm:ml-[4%]">
        {/* Heading */}
        <div className="max-w-[720px] sm:w-auto mx-auto flex items-start" data-aos="fade-up">
          <div className="flex-none text-white text-lg font-semibold leading-7 mr-2 sm:text-sm">
            Development First Question
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
          className={`max-w-[720px] sm:w-auto sm:pr-3 sm:-ml-1 pr-36 mx-auto text-justify text-neutral-400 text-opacity-60 text-sm font-normal leading-normal mt-2 transition-max-h duration-500 ease-in-out ${
            openIndex === 0 ? "max-h-[500px]" : "max-h-0 overflow-hidden"
          }`}
        >
          Yes, you can try us for free for 30 days. If you want, we’ll provide
          you with a free, personalized 30-minute onboarding call to get you up
          and running as soon as possible.
        </div>
        <div className="w-[643px] mt-4 h-px ml-[216px] sm:ml-0 sm:mx-auto sm:w-[350px] bg-gray-500" data-aos="fade-up"/>

        {/* Heading */}
        <div className="max-w-[720px] sm:w-auto mx-auto flex items-start pt-4" data-aos="fade-up">
          <div className="flex-none text-white text-lg font-semibold leading-7 mr-2 sm:text-sm">
            Can I change my plan later?
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
          className={`max-w-[720px] sm:w-auto sm:pr-3 sm:-ml-1 pr-36 mx-auto text-justify text-neutral-400 text-opacity-60 text-sm font-normal leading-normal mt-2 transition-max-h duration-500 ease-in-out ${
            openIndex === 1 ? "max-h-[500px]" : "max-h-0 overflow-hidden"
          }`}
        >
          Yes, you can try us for free for 30 days. If you want, we’ll provide
          you with a free, personalized 30-minute onboarding call to get you up
          and running as soon as possible.
        </div>
        <div className="w-[643px] mt-4 h-px ml-[216px] sm:ml-0 sm:mx-auto sm:w-[350px] bg-gray-500" data-aos="fade-up"/>

        {/* Heading */}
        <div className="max-w-[720px] sm:w-auto mx-auto flex items-start pt-4" data-aos="fade-up">
          <div className="flex-none text-white text-lg font-semibold leading-7 mr-2 sm:text-sm">
            What is your cancellation policy?
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
          className={`max-w-[720px] sm:w-auto sm:pr-3 sm:-ml-1 pr-36 mx-auto text-justify text-neutral-400 text-opacity-60 text-sm font-normal leading-normal mt-2 transition-max-h duration-500 ease-in-out ${
            openIndex === 2 ? "max-h-[500px]" : "max-h-0 overflow-hidden"
          }`}
        >
          Yes, you can try us for free for 30 days. If you want, we’ll provide
          you with a free, personalized 30-minute onboarding call to get you up
          and running as soon as possible.
        </div>
        <div className="w-[643px] mt-4 h-px ml-[216px] sm:ml-0 sm:mx-auto sm:w-[350px] bg-gray-500" data-aos="fade-up"/>

        {/* Heading */}
        <div className="max-w-[720px] sm:w-auto mx-auto flex items-start pt-4" data-aos="fade-up">
          <div className="flex-none text-white text-lg font-semibold leading-7 mr-2 sm:text-sm">
            Can other info be added to an invoice?
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
          className={`max-w-[720px] sm:w-auto sm:pr-3 sm:-ml-1 pr-36 mx-auto text-justify text-neutral-400 text-opacity-60 text-sm font-normal leading-normal mt-2 transition-max-h duration-500 ease-in-out ${
            openIndex === 3 ? "max-h-[500px]" : "max-h-0 overflow-hidden"
          }`}
        >
          Yes, you can try us for free for 30 days. If you want, we’ll provide
          you with a free, personalized 30-minute onboarding call to get you up
          and running as soon as possible.
        </div>
        <div className="w-[643px] mt-4 h-px ml-[216px] sm:ml-0 sm:mx-auto sm:w-[350px] bg-gray-500" data-aos="fade-up"/>

        {/* Heading */}
        <div className="max-w-[720px] sm:w-auto mx-auto flex items-start pt-4" data-aos="fade-up">
          <div className="flex-none text-white text-lg font-semibold leading-7 mr-2 sm:text-sm">
            How does billing work?
          </div>
          <button onClick={() => toggleVisibility(4)}>
            <img
              src={openIndex === 4 ? minusCircle : plusCircle}
              className="max-w-full h-5 left-[86%] absolute"
            ></img>
          </button>
        </div>

        {/* Actual Paragraph */}
        <div
          className={`max-w-[720px] sm:w-auto sm:pr-3 sm:-ml-1 pr-36 mx-auto text-justify text-neutral-400 text-opacity-60 text-sm font-normal leading-normal mt-2 transition-max-h duration-500 ease-in-out ${
            openIndex === 4 ? "max-h-[500px]" : "max-h-0 overflow-hidden"
          }`}
        >
          Yes, you can try us for free for 30 days. If you want, we’ll provide
          you with a free, personalized 30-minute onboarding call to get you up
          and running as soon as possible.
        </div>
        <div className="w-[643px] mt-4 h-px ml-[216px] sm:ml-0 sm:mx-auto sm:w-[350px] bg-gray-500" data-aos="fade-up"/>
      </div>
    </Section>
  );
};

export default Development;
