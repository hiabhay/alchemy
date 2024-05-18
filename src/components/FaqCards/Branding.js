import React, { useState, useEffect } from "react";
import Section from "../Section";
import minusCircle from "../../assets/images/minus-circle.png";
import plusCircle from "../../assets/images/plus-circle.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Branding = () => {
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
          <div className="flex-none text-white text-lg font-semibold leading-7 mr-2 sm:text-sm text-left sm:w-[310px]">
            What is brand identity, and why is it important?
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
          Brand identity encompasses the visual and verbal elements that
          represent your brand, including logo, colors, typography, and tone of
          voice. It's crucial because it helps differentiate your brand, fosters
          recognition, and builds trust among your audience.
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
          <div className="flex-none text-white text-lg font-semibold leading-7 mr-2 sm:text-sm text-left sm:w-[310px]">
            How do you ensure consistency in my brand across different
            platforms?
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
          We create comprehensive brand guidelines that outline specifications
          for logo usage, color palettes, typography, and brand voice. These
          guidelines serve as a reference for maintaining consistency across
          various channels, ensuring a cohesive brand experience.
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
          <div className="flex-none text-white text-lg font-semibold leading-7 mr-2 sm:text-sm text-left sm:w-[310px]">
            Can you help me establish my brand's positioning and messaging?
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
          Yes, we conduct thorough brand discovery sessions to understand your values, target audience, and competitive landscape. Based on this research, we develop a unique brand positioning strategy and craft compelling messaging that resonates with your audience.
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
          <div className="flex-none text-white text-lg font-semibold leading-7 mr-2 sm:text-sm text-left sm:w-[310px]">
          What role does storytelling play in branding?
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
          Storytelling humanizes your brand, evoking emotions and fostering deeper connections with your audience. We help you identify and articulate your brand's story, weaving it into your messaging, content, and visual elements to create a memorable brand narrative.
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
          <div className="flex-none text-white text-lg font-semibold leading-7 mr-2 sm:text-sm text-left sm:w-[310px]">
          How do you measure the effectiveness of branding efforts?
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
          className={`max-w-[720px] sm:w-auto sm:pr-7 sm:-ml-1 pr-36 mx-auto text-justify text-neutral-400 text-opacity-60 text-sm font-normal leading-normal mt-2 transition-max-h duration-500 ease-in-out ${
            openIndex === 4 ? "max-h-[500px]" : "max-h-0 overflow-hidden"
          }`}
        >
          We track key performance indicators (KPIs) such as brand awareness, engagement metrics, customer sentiment, and brand loyalty. By analyzing these metrics, we assess the impact of branding initiatives and refine strategies to enhance brand perception and resonance.
        </div>
        <div
          className="w-[643px] mt-4 h-px ml-[216px] sm:ml-0 sm:mx-auto sm:w-[350px] bg-gray-500"
          data-aos="fade-up"
        />
      </div>
    </Section>
  );
};

export default Branding;
