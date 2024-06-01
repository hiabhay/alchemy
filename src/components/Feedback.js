import React, { useEffect } from "react";
import Section from "./Section";
import PurpleBall from "../assets/images/PurpleBall.png";
import Aos from "aos";
import "aos/dist/aos.css";
import FeedbackCarousel from "./Carousels/FeedbackCarousel";
import StaticTests from "./StaticTests";
import graphicArt from "../assets/images/graphicArt.png";

const Feedback = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Section>
      <div className="flex pb-24">
        <div className="pl-8 w-96 h-96 mb-20 sm:hidden" data-aos="fade-up">
          <div className="relative">
            {/* <iframe
              className="h-[250px] w-[480px] z-10 relative left-16 top-20 rounded-xl sm:hidden"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-1XTHgs1SNo?si=5uEpe3Uk6YNw0PGR"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe> */}
            <div className="relative bottom-24 w-[550px] right-8">
              <img src={graphicArt}></img>
            </div>
            <img
              src={PurpleBall}
              className="absolute top-20 z-0 sm:hidden w-[200px]"
            ></img>
            <img
              src={PurpleBall}
              className="absolute left-[110%] top-44 z-0 sm:hidden w-[150px]"
            ></img>
          </div>
        </div>
        <div className="ml-[20%] sm:hidden md:hidden">
          <FeedbackCarousel />
        </div>
        <div className="lg:hidden xl:hidden 2xl:hidden mx-auto">
          <StaticTests />
        </div>
      </div>
    </Section>
  );
};

export default Feedback;
