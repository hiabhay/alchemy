import React, { useState } from "react";
import Slider from "react-infinite-logo-slider";
import Section from "./Section";
import uprightArrow from "../assets/images/uprightArrow.png";
import rightArrow from "../assets/images/rightArrow.png";
import leftArrow from "../assets/images/leftArrow.png";

const OurDomain = () => {
  const [toRight, setToRight] = useState(false);

  return (
    <Section>
      <div className="ml-20 mt-8 mb-8">
        <div className="text-indigo-600 font-semibold text-3xl">Industries</div>
        <div className="text-slate-300 font-semibold text-3xl">we</div>
        <div className="text-slate-300 font-semibold text-3xl">cover</div>
      </div>
      <div className="mb-4">
        <div className="w-[1100px] h-[500px] -mt-8 mx-auto z-0 cursor-pointer">
          <Slider
            width="225px"
            duration={10}
            // toRight={toRight}
            pauseOnHover={true}
            blurBorders={true}
            blurBorderColor={"#fff"}
          >
            <Slider.Slide className="h-[500px]">
              <div className="relative w-[220px] h-[200px] bottom-[15%] group">
                <div className="absolute text-indigo-600 top-[83%] text-3xl font-semibold group-hover:font-bold transition-all duration-100">
                  Real Estate
                </div>
                <img
                  className="absolute w-auto h-7 top-[85%] left-[66%] group-hover:pl-1 group-hover:h-8 transition-all"
                  src={uprightArrow}
                ></img>
                <div className="absolute w-[110px] h-0.5 bg-indigo-600 rotate-90 top-[57%] right-[73%] group-hover:h-1 transition-all"></div>
                <div className="absolute text-black top-[3%] group-hover:font-semibold transition-all">
                  Voluptatem aliquam sunt ipsa culpa pariatur qui. Quibusdam{" "}
                </div>
              </div>
            </Slider.Slide>
            <Slider.Slide className="h-[500px]">
              <div className="relative w-[220px] h-[200px] top-[17%] right-[15%] group">
                <div className="absolute text-indigo-600 text-3xl font-semibold top-[3%] left-[15%] group-hover:font-bold transition-all duration-100">
                  Healthcare
                </div>
                <img
                  className="absolute w-auto h-7 top-[5%] left-[80%] group-hover:pl-1 group-hover:h-8 transition-all"
                  src={uprightArrow}
                ></img>
                <div className="absolute w-[110px] h-0.5 bg-indigo-600 rotate-90 top-[48%] right-[58%] group-hover:h-1 transition-all"></div>
                <div className="absolute text-black top-[75%] left-[16%] group-hover:font-semibold transition-all">
                  Voluptatem aliquam sunt ipsa culpa pariatur qui.
                </div>
              </div>
            </Slider.Slide>
            <Slider.Slide>
              <div className="relative w-[220px] h-[200px] bottom-[15%] group">
                <div className="absolute text-indigo-600 top-[83%] text-3xl font-semibold group-hover:font-bold transition-all duration-100">
                  Real Estate
                </div>
                <img
                  className="absolute w-auto h-7 top-[85%] left-[66%] group-hover:pl-1 group-hover:h-8 transition-all"
                  src={uprightArrow}
                ></img>
                <div className="absolute w-[110px] h-0.5 bg-indigo-600 rotate-90 top-[57%] right-[73%] group-hover:h-1 transition-all"></div>
                <div className="absolute text-black top-[3%] group-hover:font-semibold transition-all">
                  Voluptatem aliquam sunt ipsa culpa pariatur qui. Quibusdam{" "}
                </div>
              </div>
            </Slider.Slide>
            <Slider.Slide className="h-[500px]">
              <div className="relative w-[220px] h-[200px] top-[17%] right-[15%] group">
                <div className="absolute text-indigo-600 text-3xl font-semibold top-[3%] left-[15%] group-hover:font-bold transition-all duration-100">
                  Healthcare
                </div>
                <img
                  className="absolute w-auto h-7 top-[5%] left-[80%] group-hover:pl-1 group-hover:h-8 transition-all"
                  src={uprightArrow}
                ></img>
                <div className="absolute w-[110px] h-0.5 bg-indigo-600 rotate-90 top-[48%] right-[58%] group-hover:h-1 transition-all"></div>
                <div className="absolute text-black top-[75%] left-[16%] group-hover:font-semibold transition-all">
                  Voluptatem aliquam sunt ipsa culpa pariatur qui.
                </div>
              </div>
            </Slider.Slide>
            <Slider.Slide className="h-[500px]">
              <div className="relative w-[220px] h-[200px] bottom-[15%] group">
                <div className="absolute text-indigo-600 top-[83%] text-3xl font-semibold group-hover:font-bold transition-all duration-100">
                  Real Estate
                </div>
                <img
                  className="absolute w-auto h-7 top-[85%] left-[66%] group-hover:pl-1 group-hover:h-8 transition-all"
                  src={uprightArrow}
                ></img>
                <div className="absolute w-[110px] h-0.5 bg-indigo-600 rotate-90 top-[57%] right-[73%] group-hover:h-1 transition-all"></div>
                <div className="absolute text-black top-[3%] group-hover:font-semibold transition-all">
                  Voluptatem aliquam sunt ipsa culpa pariatur qui. Quibusdam{" "}
                </div>
              </div>
            </Slider.Slide>
            <Slider.Slide className="h-[500px]">
              <div className="relative w-[220px] h-[200px] top-[17%] right-[15%] group">
                <div className="absolute text-indigo-600 text-3xl font-semibold top-[3%] left-[15%] group-hover:font-bold transition-all duration-100">
                  Healthcare
                </div>
                <img
                  className="absolute w-auto h-7 top-[5%] left-[80%] group-hover:pl-1 group-hover:h-8 transition-all"
                  src={uprightArrow}
                ></img>
                <div className="absolute w-[110px] h-0.5 bg-indigo-600 rotate-90 top-[48%] right-[58%] group-hover:h-1 transition-all"></div>
                <div className="absolute text-black top-[75%] left-[16%] group-hover:font-semibold transition-all">
                  Voluptatem aliquam sunt ipsa culpa pariatur qui.
                </div>
              </div>
            </Slider.Slide>
          </Slider>
        </div>
        <div className="relative z-10">
          <button
            onClick={() => setToRight(true)}
            className="absolute w-[40px] h-[40px] rounded-full bg-indigo-600 left-[85%] top-[-15px]"
          >
            <img src={leftArrow} className="ml-[9px]" />
          </button>
          <button className="absolute w-[40px] h-[40px] rounded-full bg-indigo-600 left-[89%] top-[-15px]">
            <img src={rightArrow} className="ml-[9px]" />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default OurDomain;
