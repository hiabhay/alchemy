import React, { useEffect, useState } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import QuoteIcon from "../../assets/images/QuoteIcon.png";
import Shivani from "../../assets/images/Shivani.png";
import Jay from "../../assets/images/Jay.png";
import Yashveer from "../../assets/images/Yashveer.png";
import Shahil from "../../assets/images/Shahil.jpg";
import Ellipse from "../../assets/images/Ellipse.png";
import Aditya from "../../assets/images/Aditya.png";

const FeedbackCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      const delta =
        -1 * Math.max(-1, Math.min(1, event.deltaY || -event.detail)); // Invert delta value
      const slider = document.getElementById("feedback-carousel");
      if (slider) {
        const sliderRect = slider.getBoundingClientRect();
        const mouseY = event.clientY - sliderRect.top;
        if (mouseY >= 0 && mouseY <= sliderRect.height) {
          event.preventDefault(); // Prevent default behavior of scrolling only when over carousel
          const sensitivityFactor = 0.2; // Adjust sensitivity
          const deltaAdjusted = delta * sensitivityFactor;
          const nextSlide = currentSlide - deltaAdjusted;
          if (nextSlide >= 0 && nextSlide <= 2) {
            // Adjust for total number of slides
            setCurrentSlide(nextSlide);
          } else if (nextSlide < 0) {
            setCurrentSlide(0);
            event.preventDefault(); // Prevent default scroll behavior at the first slide
          } else {
            setCurrentSlide(2); // Adjust for total number of slides
            event.preventDefault(); // Prevent default scroll behavior at the last slide
          }
        }
      }
    };

    const sliderElement = document.getElementById("feedback-carousel");
    if (sliderElement) {
      sliderElement.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener("wheel", handleScroll);
      }
    };
  }, [currentSlide]);

  return (
    <div
      id="feedback-carousel"
      className="-mt-8 w-[540px] h-[500px] overflow-hidden relative z-0 sm:w-[300px]"
    >
      <div className="rotate-180 absolute z-10 bottom-0 w-full h-64 bg-gradient-to-t from-transparent to-white opacity-50"></div>
      <CarouselProvider
        naturalSlideWidth={500}
        naturalSlideHeight={190}
        totalSlides={4}
        visibleSlides={2}
        orientation="vertical"
        isPlaying={true}
        infinite={true}
        dragEnabled={true}
        touchEnabled={false}
        interval={2500}
        currentSlide={currentSlide}
      >
        <Slider>
          <Slide index={0}>
            <div
              className="w-[480px] h-[185px] rounded-xl m-4 ml-4 pb-4 sm:pl-0"
              style={{ boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="pt-2 ml-5 sm:pt-1">
                <img src={QuoteIcon} className="max-w-full h-[30px]" />
                <div className="w-[420px] sm:w-auto pt-1 font-semibold text-sm pr-2 text-justify">
                  Working with Alchemy Design was transformative. Their
                  collaborative, innovative approach to UX brought a unique
                  perspective to our projects. Highly recommended for impactful
                  and creative UX design solutions.
                </div>
                <div className="flex">
                  <img src={Aditya} className="max-w-full h-[40px] mt-2" />
                  <div>
                    <div className="font-semibold font-serif pt-2 pl-3">
                      Adita Gautam
                    </div>
                    <div className="font-normal text-xs pl-3">
                      Co-Founder Turf
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={1}>
            <div
              className="w-[480px] h-[185px] sm:w-[300px] rounded-xl m-4 ml-4 pb-4 sm:pl-0"
              style={{ boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="absolute top-[15%] ml-5 sm:pt-1">
                <img src={QuoteIcon} className="max-w-full h-[30px]" />
                <div className="w-[420px] sm:w-auto pt-1 font-semibold text-sm pr-2 text-justify">
                  The overall work experience with your company is great the
                  best part is you complete the work within the given timeline.
                </div>
                <div className="absolute top-[140%] flex">
                  <img src={Shivani} className="max-w-full h-[40px] mt-2" />
                  <div>
                    <div className="font-semibold font-serif pt-2 pl-3">
                      Shivani Poddar
                    </div>
                    <div className="font-normal text-xs pl-3">
                      CEO Crystal Mat-Foam
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={2}>
            <div
              className="w-[480px] h-[185px] sm:w-[300px] rounded-xl m-4 ml-4 pb-4 sm:pl-0"
              style={{ boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="pt-2 ml-5 sm:pt-1">
                <img src={QuoteIcon} className="max-w-full h-[30px]" />
                <div className="w-[420px] sm:w-auto pt-1 font-semibold text-sm pr-2 text-justify">
                  Choosing Alchemy was the best decision for our website! Their
                  creativity and expertise turned our vision into a stunning
                  reality. Highly recommend!
                </div>
                <div className="absolute top-[65%] flex">
                  <img
                    src={Shahil}
                    className="w-[40px] h-[40px] rounded-full mt-2"
                  />
                  <div>
                    <div className="font-semibold font-serif pt-2 pl-3">
                      Yashveer Talan
                    </div>
                    <div className="font-normal text-xs pl-3">
                      CEO Krishi Tokri
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={3}>
            <div
              className="w-[480px] h-[185px] rounded-xl m-4 ml-4 pb-4 sm:pl-0"
              style={{ boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="pt-2 ml-5 sm:pt-1">
                <img src={QuoteIcon} className="max-w-full h-[30px]" />
                <div className="w-[420px] sm:w-auto pt-1 font-semibold text-sm pr-2 text-justify">
                  Working with Alchemy was a pleasure. Their stunning graphics
                  transformed our social media, perfectly capturing Clarity, our
                  drinking water brand. Their creativity exceeded our
                  expectations. Highly recommend.
                </div>
                <div className="flex">
                  <img src={Ellipse} className="max-w-full h-[40px] mt-2" />
                  <div>
                    <div className="font-semibold font-serif pt-2 pl-3">
                      Anuj Chauhan
                    </div>
                    <div className="font-normal text-xs pl-3">Clarity</div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </Slider>
      </CarouselProvider>
    </div>
  );
};

export default FeedbackCarousel;
