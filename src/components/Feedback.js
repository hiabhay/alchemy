import React, { useEffect } from "react";
import Section from "./Section";
import PurpleBall from "../assets/images/PurpleBall.png";
import Aos from "aos";
import "aos/dist/aos.css";
import FeedbackCarousel from "./Carousels/FeedbackCarousel";

const Feedback = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Section>
      <div className="flex pb-24">
        <div className="pl-8 w-96 h-96 mb-20" data-aos="fade-up">
          <div className="relative">
            <iframe
              className="h-[250px] w-[480px] z-10 relative left-16 top-20 rounded-xl sm:hidden"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-1XTHgs1SNo?si=5uEpe3Uk6YNw0PGR"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <img src={PurpleBall} className="absolute -left-5 -top-5 z-0 sm:hidden"></img>
            <img
              src={PurpleBall}
              className="absolute left-96 top-[220px] z-0 sm:hidden"
            ></img>
          </div>
        </div>
        <div className="ml-[20%] sm:ml-0 sm:hidden">
          <FeedbackCarousel />
        </div>
      </div>
    </Section>
  );
};

export default Feedback;
