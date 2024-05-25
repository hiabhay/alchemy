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
        className="pl-[5%] sm:ml-1 sm:mr-1 sm:w-auto mx-auto sm:mt-8 relative w-[1100px]"
        data-aos="fade-up"
        style={{ paddingTop: '56.25%' }}
      >
        <iframe 
        className="hover:scale-105 transition-all"
          src="https://player.vimeo.com/video/949262640?badge=0&autopause=0&player_id=0&app_id=58479" 
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
          title="Alchemy Showreel"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        ></iframe>
      </div>
    </Section>
  );
};

export default IntroVideo;
