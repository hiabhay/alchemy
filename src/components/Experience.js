import React, { useEffect, useState } from "react";
import UVector from "../assets/images/UVector.png";
import purpleBallSolo from "../assets/images/purpleBallSolo.png";
import chromeTab from "../assets/images/chromeTab.png";
import InstagramMockup from "../assets/images/InstagramMockup.png";
import Section from "./Section";
import ExperienceCarousel from "./Carousels/ExperienceCarousel";
import Aos from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleOptionChosen = (index) => {
    console.log("Option chosen:", index);
  };

  return (
    <Section color="bg-white">
      <div className="flex bg-white mr-16 mb-20 mt-12 ml-16 sm:ml-8">
        <div className="relative w-[500px] sm:hidden">
          <div className="relative flex">
            <div className="relative flex">
              <div
                className={`transition-opacity duration-500 ${
                  currIndex === 2 ? "opacity-100" : "opacity-0"
                }`}
              >
                <img src={chromeTab} className="max-w-full h-[400px]" />
              </div>
            </div>

            <div className="absolute flex">
              <div
                className={`transition-opacity duration-500 ${
                  currIndex === 3 ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={InstagramMockup}
                  className="max-w-full h-[500px] -mt-12"
                />
              </div>
            </div>

            <div
              className={`absolute transition-all duration-500 ${
                currIndex === 3
                  ? "w-[310px] mt-32 ml-[47px]" : currIndex === 2 ? "w-[400px] mt-20"
                  : "w-[500px]"
              } `}
            >
              <img src={UVector} data-aos="fade-up"></img>
              <div
                className={`transition-all duration-1000 ${
                  currIndex === 0 ? "opacity-0" : "opacity-100"
                } ${currIndex === 2 ? "-mb-3" : ""}`}
              >
                <img
                  className={`transition-all duration-1000 absolute max-w-full ${currIndex === 3 ? "h-[70px] top-[37%] left-[40%]" : "h-[101px] top-[38.5%] left-[40%]"} `}
                  src={purpleBallSolo}
                  data-aos="fade-up"
                />
              </div>
            </div>
          </div>
        </div>

        <ExperienceCarousel
          currIndex={currIndex}
          setCurrIndex={setCurrIndex}
          onOptionChosen={handleOptionChosen}
        />
      </div>
    </Section>
  );
};

export default Experience;
