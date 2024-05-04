import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import UVector from "../../assets/images/UVector.png";
import UVector1 from "../../assets/images/UVector1.png";

// Component for UX Design section
const UXDesign = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div>
      <div
        className="text-sm font-semibold leading-2 text-black text-opacity-40 w-[380px] sm:w-[295px] text-justify"
        data-aos="fade-up"
        data-aos-duration="300"
      >
        Alchemy transform your digital platform with our expert Senior UX
        designers. We specialize in crafting seamless user experiences that
        captivate and convert. From user research to visual design, we'll take
        your interface to the next level.
      </div>
      <div className="flex">
        <div className="flex mt-12" data-aos="fade-up" data-aos-duration="600">
          <div className="text-indigo-600 text-[50px] font-bold leading-[96px] tracking-tight">
            4+
          </div>
          <div className="text-[15px] mt-9 font-semibold leading-snug tracking-tight ml-2 text-black text-opacity-40">
            Years of expertise
          </div>
        </div>

        <div className="flex ml-6" data-aos="fade-up" data-aos-duration="900">
          <div className="text-indigo-600 text-[50px] font-bold leading-[96px] tracking-tight">
            30+
          </div>
          <div className="text-[15px] mt-9 font-semibold leading-snug tracking-tight ml-2 text-black text-opacity-40">
            Clients Served
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for UI Design section
const UIDesign = () => {
  return (
    <div data-aos="fade-up">
      <div
        className="text-sm font-semibold leading-2 text-black text-opacity-40 w-[380px] text-justify sm:w-[280px]"
        data-aos="fade-up"
        data-aos-duration="300"
      >
        Unlock the power of exceptional UI design with our specialized experts.
        We blend creativity and functionality to craft captivating user
        interfaces that drive engagement and conversions. From wireframes to
        pixel-perfect designs, we'll bring your vision to life.
      </div>
      <div className="flex">
        <div className="flex mt-12" data-aos="fade-up" data-aos-duration="600">
          <div className="text-indigo-600 text-[50px] font-bold leading-[96px] tracking-tight">
            5+
          </div>
          <div className="text-[15px] mt-9 font-semibold leading-snug tracking-tight ml-2 text-black text-opacity-40">
            Years of expertise
          </div>
        </div>

        <div className="flex ml-6" data-aos="fade-up" data-aos-duration="900">
          <div className="text-indigo-600 text-[50px] font-bold leading-[96px] tracking-tight">
            21+
          </div>
          <div className="text-[15px] mt-9 font-semibold leading-snug tracking-tight ml-2 text-black text-opacity-40">
            Clients Served
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for Web Development section
const WebDevelopment = () => {
  return (
    <div data-aos="fade-up">
      <div
        className="text-sm font-semibold leading-2 text-black text-opacity-40 w-[380px] text-justify sm:w-[280px]"
        data-aos="fade-up"
        data-aos-duration="300"
      >
        Elevate your brand's online presence with our professional web
        designers. Alchemy combines creativity and technical expertise to craft
        visually stunning and user-friendly websites that drive results. Stand
        out from the competition with our tailored web design solutions!
      </div>
      <div className="flex">
        <div className="flex mt-12" data-aos="fade-up" data-aos-duration="600">
          <div className="text-indigo-600 text-[50px] font-bold leading-[96px] tracking-tight">
            6+
          </div>
          <div className="text-[15px] mt-9 font-semibold leading-snug tracking-tight ml-2 text-black text-opacity-40">
            Years of expertise
          </div>
        </div>

        <div className="flex ml-6" data-aos="fade-up" data-aos-duration="900">
          <div className="text-indigo-600 text-[50px] font-bold leading-[96px] tracking-tight">
            22+
          </div>
          <div className="text-[15px] mt-9 font-semibold leading-snug tracking-tight ml-2 text-black text-opacity-40">
            Clients Served
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for Branding section
const Branding = () => {
  return (
    <div data-aos="fade-up">
      <div
        className="text-sm font-semibold leading-2 text-black text-opacity-40 w-[380px] text-justify sm:w-[280px]"
        data-aos="fade-up"
        data-aos-duration="300"
      >
        Unlock the full potential of your brand with our comprehensive branding
        service. From logo design to brand strategy, we'll help you create a
        memorable and impactful brand identity that resonates with your target
        audience. Partner with Alchemy to leave a lasting impression in the
        digital world!
      </div>
      <div className="flex">
        <div className="flex mt-12" data-aos="fade-up" data-aos-duration="600">
          <div className="text-indigo-600 text-[50px] font-bold leading-[96px] tracking-tight">
            7+
          </div>
          <div className="text-[15px] mt-9 font-semibold leading-snug tracking-tight ml-2 text-black text-opacity-40">
            Years of expertise
          </div>
        </div>

        <div className="flex ml-6" data-aos="fade-up" data-aos-duration="900">
          <div className="text-indigo-600 text-[50px] font-bold leading-[96px] tracking-tight">
            23+
          </div>
          <div className="text-[15px] mt-9 font-semibold leading-snug tracking-tight ml-2 text-black text-opacity-40">
            Clients Served
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceCarousel = ({ currIndex, setCurrIndex, onOptionChosen }) => {
  // const [selectedButton, setSelectedButton] = useState(0);

  const renderSelectedSection = () => {
    switch (currIndex) {
      case 0:
        return <UXDesign />;
      case 1:
        return <UIDesign />;
      case 2:
        return <WebDevelopment />;
      case 3:
        return <Branding />;
      default:
        return null;
    }
  };

  const handleButtonClick = (index) => {
    onOptionChosen(index);
    setCurrIndex(index);
  };

  return (
    <div
      className="text-black bg-white w-[200px] h-[390px] top-20 ml-32 sm:ml-0"
      data-aos="fade-up"
    >
      <div>
        <div>
          {["UX Design", "UI Design", "Web Development", "Branding"].map(
            (text, index) => (
              <div className="flex">
                <div className="mt-2" key={index}>
                  <button
                    className="flex"
                    onClick={() => handleButtonClick(index)}
                  >
                    <div
                      className={`mt-[10px] mr-4 w-8 h-[3.5px] sm:w-5 sm:mr-2 bg-black rounded-2xl ${
                        currIndex === index ? "" : "invisible"
                      }`}
                    />
                    <div
                      className={`text-black font-xl ${
                        currIndex === index ? "font-bold" : "text-opacity-40"
                      }`}
                    >
                      {text}
                    </div>
                  </button>
                </div>
              </div>
            )
          )}
          <div className="ml-12 mt-8 sm:ml-7 sm:mt-6">
            {renderSelectedSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCarousel;
