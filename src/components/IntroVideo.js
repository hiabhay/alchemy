import React, { useEffect } from "react";
import Section from "./Section";
import Aos from "aos";
import "aos/dist/aos.css";

const IntroVideo = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Section>
      <div
        className="pl-[5%] sm:pl-0 sm:w-auto mx-auto sm:mt-8"
        data-aos="fade-up"
      >
        <iframe
          className="hover:scale-110 transition-transform duration-700 ease-in-out w-[1130px] h-[450px] sm:w-[350px] sm:mx-auto sm:h-[200px]"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nPNo28_MwU0?controls=0&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </Section>
  );
};

export default IntroVideo;