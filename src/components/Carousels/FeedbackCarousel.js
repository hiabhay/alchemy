import React, { useEffect, useState } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import QuoteIcon from "../../assets/images/QuoteIcon.png";
import Shivani from "../../assets/images/Shivani.png";
import Jay from "../../assets/images/Jay.png";
import Yashveer from "../../assets/images/Yashveer.png";

const FeedbackCarousel = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const handleScroll = (event) => {
  //     const delta =
  //       -1 * Math.max(-1, Math.min(1, event.deltaY || -event.detail)); // Invert delta value
  //     const slider = document.getElementById("feedback-carousel");
  //     if (slider) {
  //       const sliderRect = slider.getBoundingClientRect();
  //       const mouseY = event.clientY - sliderRect.top;
  //       if (mouseY >= 0 && mouseY <= sliderRect.height) {
  //         event.preventDefault(); // Prevent default behavior of scrolling only when over carousel
  //         const sensitivityFactor = 0.2; // Adjust sensitivity
  //         const deltaAdjusted = delta * sensitivityFactor;
  //         const nextSlide = currentSlide - deltaAdjusted;
  //         if (nextSlide >= 0 && nextSlide <= 2) {
  //           // Adjust for total number of slides
  //           setCurrentSlide(nextSlide);
  //         } else if (nextSlide < 0) {
  //           setCurrentSlide(0);
  //           event.preventDefault(); // Prevent default scroll behavior at the first slide
  //         } else {
  //           setCurrentSlide(2); // Adjust for total number of slides
  //           event.preventDefault(); // Prevent default scroll behavior at the last slide
  //         }
  //       }
  //     }
  //   };

  //   document
  //     .getElementById("feedback-carousel")
  //     .addEventListener("wheel", handleScroll);

  //   return () => {
  //     document
  //       .getElementById("feedback-carousel")
  //       .removeEventListener("wheel", handleScroll);
  //   };
  // }, [currentSlide]);

  return (
    <div
      id="feedback-carousel"
      className="-mt-8 w-[540px] h-[500px] overflow-hidden relative z-0 sm:w-[300px]"
    >
      <div className="rotate-180 absolute z-10 bottom-0 w-full h-64 bg-gradient-to-t from-transparent to-white opacity-50"></div>
      <CarouselProvider
        naturalSlideWidth={500}
        naturalSlideHeight={190}
        totalSlides={3}
        visibleSlides={2}
        orientation="vertical"
        isPlaying={true}
        infinite={true}
        dragEnabled={true}
        touchEnabled={false}
        interval={3500}
        // currentSlide={currentSlide}
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
                  Alchemy has been instrumental in transforming our fitness
                  app's user experience. Their expertise and creativity have
                  exceeded our expectations, resulting in an intuitive and
                  engaging interface.
                </div>
                <div className="flex">
                  <img src={Jay} className="max-w-full h-[40px] mt-2" />
                  <div>
                    <div className="font-semibold font-serif pt-2 pl-3">
                      Jay Gandhi
                    </div>
                    <div className="font-normal text-xs pl-3">CTO Notch</div>
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
              <div className="pt-2 ml-5 sm:pt-1">
                <img src={QuoteIcon} className="max-w-full h-[30px]" />
                <div className="w-[420px] sm:w-auto pt-1 font-semibold text-sm pr-2 text-justify">
                  Alchemy team has revolutionized our mattress company's online
                  presence. With their innovative designs and flawless
                  development, our customers now enjoy a seamless shopping
                  experience.
                </div>
                <div className="flex">
                  <img src={Shivani} className="max-w-full h-[40px] mt-2" />
                  <div>
                    <div className="font-semibold font-serif pt-2 pl-3">
                      Shivani Agarwal
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
                  The UI/UX team has played a crucial role in revolutionizing
                  our farm supplies vendor app. Their expertise in design and
                  user experience has elevated our platform, resulting in an
                  intuitive and user friendly app.
                </div>
                <div className="flex">
                  <img src={Yashveer} className="max-w-full h-[40px] mt-2" />
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
          {/* <Slide index={3}>
            <div className="w-[480px] h-[185px] sm:w-[300px] rounded-xl m-4 ml-4 pb-4 sm:pl-0 " style={{ boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.2)' }}>
            <div className="pt-5 ml-5 sm:pt-1">
                <img src={QuoteIcon} className="max-w-full h-[30px]" />
                <div className="w-[420px] sm:w-auto pt-4 font-normal pr-2 sm:pt-2">
                  Tempore velit velit expedita sit culpa ut non. Tempora aut
                  ipsam. Quaerat et consequatur nisi et eveniet placeat.
                </div>
                <div className="flex">
                  <img src={Ellipse30} className="max-w-full h-[40px] mt-4" />
                  <div>
                    <div className="font-semibold font-serif pt-4 pl-3">
                      Dewey Considine
                    </div>
                    <div className="font-normal text-xs pl-3">
                      CEO MAPLE TECHNOLOGIES
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={4}>
            <div className="w-[480px] h-[185px] sm:w-[300px] rounded-xl m-4 ml-4 pb-4 sm:pl-0 " style={{ boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.2)' }}>
            <div className="pt-5 ml-5 sm:pt-1">
                <img src={QuoteIcon} className="max-w-full h-[30px]" />
                <div className="w-[420px] sm:w-auto pt-4 font-normal pr-2 sm:pt-2">
                  Tempore velit velit expedita sit culpa ut non. Tempora aut
                  ipsam. Quaerat et consequatur nisi et eveniet placeat.
                </div>
                <div className="flex">
                  <img src={Ellipse30} className="max-w-full h-[40px] mt-4" />
                  <div>
                    <div className="font-semibold font-serif pt-4 pl-3">
                      Dewey Considine
                    </div>
                    <div className="font-normal text-xs pl-3">
                      CEO MAPLE TECHNOLOGIES
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={5}>
            <div className="w-[480px] h-[185px] sm:w-[300px] rounded-xl m-4 ml-4 pb-4 sm:pl-0 " style={{ boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.2)' }}>
            <div className="pt-5 ml-5 sm:pt-1">
                <img src={QuoteIcon} className="max-w-full h-[30px]" />
                <div className="w-[420px] sm:w-auto pt-4 font-normal pr-2 sm:pt-2">
                  Tempore velit velit expedita sit culpa ut non. Tempora aut
                  ipsam. Quaerat et consequatur nisi et eveniet placeat.
                </div>
                <div className="flex">
                  <img src={Ellipse30} className="max-w-full h-[40px] mt-4" />
                  <div>
                    <div className="font-semibold font-serif pt-4 pl-3">
                      Dewey Considine
                    </div>
                    <div className="font-normal text-xs pl-3">
                      CEO MAPLE TECHNOLOGIES
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={6}>
            <div className="w-[480px] h-[185px] sm:w-[300px] rounded-xl m-4 ml-4 pb-4 sm:pl-0 " style={{ boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.2)' }}>
            <div className="pt-5 ml-5 sm:pt-1">
                <img src={QuoteIcon} className="max-w-full h-[30px]" />
                <div className="w-[420px] sm:w-auto pt-4 font-normal pr-2 sm:pt-2">
                  Tempore velit velit expedita sit culpa ut non. Tempora aut
                  ipsam. Quaerat et consequatur nisi et eveniet placeat.
                </div>
                <div className="flex">
                  <img src={Ellipse30} className="max-w-full h-[40px] mt-4" />
                  <div>
                    <div className="font-semibold font-serif pt-4 pl-3">
                      Dewey Considine
                    </div>
                    <div className="font-normal text-xs pl-3">
                      CEO MAPLE TECHNOLOGIES
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={7}>
            <div className="w-[480px] h-[185px] sm:w-[300px] rounded-xl m-4 ml-4 pb-4 sm:pl-0 " style={{ boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.2)' }}>
            <div className="pt-5 ml-5 sm:pt-1">
                <img src={QuoteIcon} className="max-w-full h-[30px]" />
                <div className="w-[420px] sm:w-auto pt-4 font-normal pr-2 sm:pt-2">
                  Tempore velit velit expedita sit culpa ut non. Tempora aut
                  ipsam. Quaerat et consequatur nisi et eveniet placeat.
                </div>
                <div className="flex">
                  <img src={Ellipse30} className="max-w-full h-[40px] mt-4" />
                  <div>
                    <div className="font-semibold font-serif pt-4 pl-3">
                      Dewey Considine
                    </div>
                    <div className="font-normal text-xs pl-3">
                      CEO MAPLE TECHNOLOGIES
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={8}>
            <div className="w-[480px] h-[185px] sm:w-[300px] rounded-xl m-4 ml-4 pb-4 sm:pl-0 " style={{ boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.2)' }}>
            <div className="pt-5 ml-5 sm:pt-1">
                <img src={QuoteIcon} className="max-w-full h-[30px]" />
                <div className="w-[420px] sm:w-auto pt-4 font-normal pr-2 sm:pt-2">
                  Tempore velit velit expedita sit culpa ut non. Tempora aut
                  ipsam. Quaerat et consequatur nisi et eveniet placeat.
                </div>
                <div className="flex">
                  <img src={Ellipse30} className="max-w-full h-[40px] mt-4" />
                  <div>
                    <div className="font-semibold font-serif pt-4 pl-3">
                      Dewey Considine
                    </div>
                    <div className="font-normal text-xs pl-3">
                      CEO MAPLE TECHNOLOGIES
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={9}>
            <div className="w-[480px] h-[185px] sm:w-[300px] rounded-xl m-4 ml-4 pb-4 sm:pl-0 " style={{ boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.2)' }}>
            <div className="pt-5 ml-5 sm:pt-1">
                <img src={QuoteIcon} className="max-w-full h-[30px]" />
                <div className="w-[420px] sm:w-auto pt-4 font-normal pr-2 sm:pt-2">
                  Tempore velit velit expedita sit culpa ut non. Tempora aut
                  ipsam. Quaerat et consequatur nisi et eveniet placeat.
                </div>
                <div className="flex">
                  <img src={Ellipse30} className="max-w-full h-[40px] mt-4" />
                  <div>
                    <div className="font-semibold font-serif pt-4 pl-3">
                      Dewey Considine
                    </div>
                    <div className="font-normal text-xs pl-3">
                      CEO MAPLE TECHNOLOGIES
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={10}>
            <div className="w-[480px] h-[185px] sm:w-[300px] rounded-xl m-4 ml-4 pb-4 sm:pl-0 " style={{ boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.2)' }}>
            <div className="pt-5 ml-5 sm:pt-1">
                <img src={QuoteIcon} className="max-w-full h-[30px]" />
                <div className="w-[420px] sm:w-auto pt-4 font-normal pr-2 sm:pt-2">
                  Tempore velit velit expedita sit culpa ut non. Tempora aut
                  ipsam. Quaerat et consequatur nisi et eveniet placeat.
                </div>
                <div className="flex">
                  <img src={Ellipse30} className="max-w-full h-[40px] mt-4" />
                  <div>
                    <div className="font-semibold font-serif pt-4 pl-3">
                      Dewey Considine
                    </div>
                    <div className="font-normal text-xs pl-3">
                      CEO MAPLE TECHNOLOGIES
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide> */}
        </Slider>
      </CarouselProvider>
    </div>
  );
};

export default FeedbackCarousel;
