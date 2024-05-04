import React, { useState, useEffect } from "react";
import Ellipse from "../../assets/images/Ellipse.png";
import rightArrowWhite from "../../assets/images/rightArrowWhite.png";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const HeroCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNextButtonClick = () => {
    const nextSlide = (activeSlide + 1) % 2;
    setActiveSlide(nextSlide);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (activeSlide + 1) % 2;
      setActiveSlide(nextSlide);
    }, 2000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <div className="bg-white h-[200px] w-[300px] relative">
      <CarouselProvider
        naturalSlideWidth={350}
        naturalSlideHeight={200}
        totalSlides={2}
        infinite={true}
        currentSlide={activeSlide}
        isPlaying={true}
        interval={2000}
      >
        <div className="flex pb-2">
          {[...Array(2).keys()].map((index) => (
            <div
              key={index}
              className={`h-[6px] rounded-full ${
                index === activeSlide
                  ? "w-[18px] bg-indigo-600"
                  : "w-[8px] bg-zinc-400"
              } ${index > 0 ? "ml-[3px]" : ""} transition-all duration-300`}
            ></div>
          ))}
        </div>
        <Slider>
          <Slide className="text-black" index={0}>
            <div className="text-sm font-semibold mb-2">
              The overall work experience with your company is great the best
              part is you complete the work within the given timeline
            </div>
            <div className="flex pt-6">
              <img className="h-max w-max" src={Ellipse} alt="Ellipse"></img>
              <div className="pl-4">
                <div className="font-bold">Shvani Poddar</div>
                <div className="text-opacity-25">ceo Crystal Matfoa</div>
              </div>
            </div>
          </Slide>
          <Slide className="text-black" index={1}>
            {/* Slide 2 content */}
            <div className="text-sm font-semibold mb-2">
              Working with Alchemy Design was transformative. Their
              collaborative, innovative approach to UX brought a unique
              perspective to our projects.
            </div>
            <div className="flex pt-2">
              <img className="h-max w-max" src={Ellipse} alt="Ellipse"></img>
              <div className="pl-4">
                <div className="font-bold">Aditya Gautam</div>
                <div className="text-opacity-25">Founder Turf</div>
              </div>
            </div>
          </Slide>
          {/* <Slide className="text-black" index={2}>

            <div className="text-sm font-semibold mb-2">
              Voluptatem aliquam sunt ipsa culpa pariatur qui. Quibusdam
              consequatur sed sed repellat iste ratione dolor aut. Explicabo
              labore reprehenderit
            </div>
            <div className="flex pt-2">
              <img className="h-max w-max" src={Ellipse} alt="Ellipse"></img>
              <div className="pl-4">
                <div className="font-bold">Aditya Gautam</div>
                <div className="text-opacity-25">ceo Instaraise</div>
              </div>
            </div>
          </Slide> */}
        </Slider>
        <ButtonNext
          className="text-white h-[33px] w-[53px] rounded-full bg-black absolute top-28 right-0 mt-2 mr-2"
          onClick={handleNextButtonClick}
        >
          <img className="ml-4" src={rightArrowWhite} alt="Next"></img>
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
};

export default HeroCarousel;
