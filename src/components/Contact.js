import React, { useEffect } from "react";
import Section from "../components/Section";
import Ellipse39 from "../assets/images/Ellipse39.png";
import Ellipse41 from "../assets/images/Ellipse41.png";
import PurpleBall from "../assets/images/PurpleBall.png";
import Aos from "aos";
import "aos/dist/aos.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <Section>
      <div className="flex relative">
        <div className="h-[650px] sm:invisible" data-aos="fade-right" id="contact-component">
          <div className="relative sm:hidden">
            <div className="absolute z-0 flex">
              <img className="h-[500px] pt-20" src={Ellipse39}></img>
              <img className="h-[650px]" src={Ellipse41}></img>
            </div>
          </div>
          <div>
            <div className="pt-48 pl-20">
              <div className="text-5xl font-semibold text-neutral-300">
                Schedule a
              </div>
              <div className="text-5xl font-semibold text-indigo-600 pt-4">
                Free Consultation
              </div>
              <div className="text-5xl font-semibold text-neutral-300 pt-4">
                with us today!
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[60%] top-[10%] sm:left-[10.5%]">
          <div>
          <img src={PurpleBall} className="absolute z-0 top-[-16%] w-[140px] sm:w-[90px] sm:top-[-11%] left-[80%] h-auto"/>
            <ContactForm />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
