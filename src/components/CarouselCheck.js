import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Section from "../components/Section";
import "./Car.css";
import uprightArrow from "../assets/images/uprightArrow.png";
import leftArrow from "../assets/images/leftArrow.png";
import rightArrow from "../assets/images/rightArrow.png";

const CarouselCheck = () => {
  return (
    <Section>
      <div className="relative w-[1100px] h-[400px] mb-48 mx-auto sm:max-w-full sm:hidden">
        <div className="mt-12 sm:ml-[2%]">
          <div className="relative font-bold text-indigo-600 z-20 text-2xl">
            Industries
          </div>
          <div className="relative font-bold text-slate-300 z-20 text-2xl">
            We
          </div>
          <div className="relative font-bold text-slate-300 z-20 text-2xl">
            Cover
          </div>
        </div>
        {/* Blur effect at the beginning of the carousel */}
        <div className="absolute inset-y-0 left-[-2%] h-[460px] top-[20%] w-40 bg-gradient-to-r from-white to-transparent blur-[10px] z-10"></div>
        {/* Blur effect at the end of the carousel */}
        <div className="absolute inset-y-0 right-0 w-40 h-[460px] bg-gradient-to-l from-white to-transparent blur-[10px] z-10"></div>
        <AliceCarousel
          autoPlay
          mouseTracking
          infinite
          autoPlayInterval={700}
          disableDotsControls={true}
          items={[
            
            <div className="relative w-[220px] h-[260px] bg-white cursor-pointer bottom-[15%] group">
              <div className="flex">
                <div className="absolute text-indigo-600 font-semibold group-hover:font-bold text-3xl top-[83%] transition-all">
                  Real Estate
                </div>
                <img
                  className="absolute w-auto h-8 top-[85%] left-[66%] group-hover:pl-1 group-hover:h-8 transition-all"
                  src={uprightArrow}
                ></img>
              </div>
              <div className="absolute w-[160px] h-0.5 bg-indigo-600 rotate-90 top-[54%] right-[62%] group-hover:h-1 transition-all"></div>
              <div className="absolute w-[330px] text-black top-[-2%] group-hover:font-semibold transition-all">
                Designing experiences to bring evolution of property management
                and sales with our sophisticated solutions
              </div>
            </div>,
            <div className="relative w-[220px] h-[200px] cursor-pointer mt-[94%] right-[2%] group">
              <div>
                <div className="absolute text-indigo-600 font-semibold text-3xl top-[3%] group-hover:font-bold transition-all">
                  Services
                </div>
                <img
                  src={uprightArrow}
                  className="absolute left-[51%] w-auto h-8 top-[4%] group-hover:pl-1 group-hover:h-8 transition-all"
                ></img>
              </div>
              <div className="absolute w-[110px] h-0.5 bg-indigo-600 rotate-90 top-[50%] right-[73%] group-hover:h-1 transition-all"></div>
              <div className="absolute w-[270px] text-black top-[79%] group-hover:font-semibold transition-all">
                Navigate the diverse landscape of service-based industries with
                our bespoke designs.
              </div>
            </div>,
            <div className="relative w-[220px] h-[200px] cursor-pointer bg-white bottom-[15%] group">
              <div className="flex">
                <div className="absolute text-indigo-600 font-semibold group-hover:font-bold text-3xl top-[104%] transition-all">
                  Fintech
                </div>
                <img
                  className="absolute w-auto h-8 top-[106%] left-[44%] group-hover:pl-1 group-hover:h-8 transition-all"
                  src={uprightArrow}
                ></img>
              </div>
              <div className="absolute w-[110px] h-0.5 bg-indigo-600 rotate-90 top-[78%] right-[73%] group-hover:h-1 transition-all"></div>
              <div className="absolute w-[300px] text-black top-[18.5%] group-hover:font-semibold transition-all">
                Solutions tailored to streamline transactions, enhance security,
                and revolutionize.
              </div>
            </div>,
            <div className="relative w-[270px] h-[250px] cursor-pointer mt-[92%] right-[8%] group">
              <div>
                <div className="absolute text-indigo-600 font-semibold text-3xl top-[3%] group-hover:font-bold transition-all">
                  eCommerce
                </div>
                <img
                  src={uprightArrow}
                  className="absolute left-[61%] w-auto h-8 top-[4%] group-hover:pl-1 group-hover:h-8 transition-all"
                ></img>
              </div>
              <div className="absolute w-[130px] h-0.5 bg-indigo-600 rotate-90 top-[44%] right-[73%] group-hover:h-1 transition-all"></div>
              <div className="absolute text-black top-[70%] left-[2%] group-hover:font-semibold transition-all">
                Online retail with our cutting-edge designs crafted to elevate
                user experiences
              </div>
            </div>,
            <div className="relative w-[220px] h-[200px] cursor-pointer bg-white bottom-[15%] group">
              <div className="flex">
                <div className="absolute text-indigo-600 font-semibold group-hover:font-bold text-3xl top-[107%] transition-all">
                  Fitness
                </div>
                <img
                  className="absolute w-auto h-8 top-[108%] left-[42%] group-hover:pl-1 group-hover:h-8 transition-all"
                  src={uprightArrow}
                ></img>
              </div>
              <div className="absolute w-[110px] h-0.5 bg-indigo-600 rotate-90 top-[82%] right-[73%] group-hover:h-1 transition-all"></div>
              <div className="absolute w-[270px] text-black top-[22%] group-hover:font-semibold transition-all">
                Empowering users on their wellness journey, delivering
                personalized workouts, tracking progress
              </div>
            </div>,
            <div className="relative w-[270px] h-[250px] cursor-pointer mt-[92%] right-[8%] group">
              <div>
                <div className="absolute text-indigo-600 font-semibold text-3xl top-[3%] group-hover:font-bold transition-all">
                  eCommerce
                </div>
                <img
                  src={uprightArrow}
                  className="absolute left-[61%] w-auto h-8 top-[4%] group-hover:pl-1 group-hover:h-8 transition-all"
                ></img>
              </div>
              <div className="absolute w-[130px] h-0.5 bg-indigo-600 rotate-90 top-[44%] right-[73%] group-hover:h-1 transition-all"></div>
              <div className="absolute text-black top-[70%] left-[2%] group-hover:font-semibold transition-all">
                Online retail with our cutting-edge designs crafted to elevate
                user experiences
              </div>
            </div>,
            
          ]}
          responsive={{
            0: { items: 1 },
            600: { items: 3 },
            1024: { items: 5 },
          }}
        />
        <div
          className="absolute w-[40px] h-[40px] rounded-full bg-indigo-600 left-[86.5%] top-[138%] z-20"
          style={{ pointerEvents: "none" }}
        >
          <img src={leftArrow} className="w-4 h-auto mt-4 ml-3" />
        </div>
        <div
          className="absolute w-[40px] h-[40px] rounded-full bg-indigo-600 left-[90.5%] top-[138%] z-20"
          style={{ pointerEvents: "none" }}
        >
          <img src={rightArrow} className="w-4 h-auto mt-4 ml-3" />
        </div>
      </div>
    </Section>
  );
};

export default CarouselCheck;
