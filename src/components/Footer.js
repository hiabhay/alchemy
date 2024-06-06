import React, { useEffect } from "react";
import Section from "./Section";
import Ellipse23 from "../assets/images/Ellipse23.png";
import Ellipse24 from "../assets/images/Ellipse24.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "gatsby";

const Footer = ({ scrollToContact }) => {
  const handleButtonClick = () => {
    const isHomepage = window.location.pathname === "/";
    
    if (isHomepage) {
      scrollToContact();
    } else {
      window.location.href = "/";
    }
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Section color="bg-slate-950">
      <div className="bg-slate-950">
        <div className="text-white flex pl-16 pt-12 sm:pl-4 sm:pt-8 sm:flex-col">
          <div data-aos="fade-up" data-aos-duration="800">
            <div className="text-white text-[60px] font-semibold leading-[100px] tracking-tight">
              Let’s Talk
            </div>
            <div className="text-white text-2xl font-normal leading-9 tracking-tight">
              <a
                href="mailto:hello@alchemydesign.xyz"
                className="sm:text-indigo-600"
              >
                hello@alchemydesign.xyz
              </a>
            </div>
            <div className="mt-2 w-[296px] h-[0px] border border-gray-700"></div>
            <div className="text-white text-md font-normal mt-8 sm:mt-6 leading-[20px] tracking-tight sm:text-zinc-400">
              Headquarters - Bangaluru, India
            </div>
          </div>

          <div className="flex pl-[28%] mt-6 sm:pl-0 sm:mt-20">
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="text-white text-xl sm:text-md font-bold leading-[30px] tracking-tight">
                Socials
              </div>
              <div className="text-white text-opacity-75 text-lg font-normal leading-[23px] tracking-tight pt-6">
                <Link
                  href="https://dribbble.com/alchemy_global"
                  target="_blank"
                >
                  Dribble
                </Link>
              </div>
              <div className="text-white text-opacity-75 text-lg font-normal leading-[23px] tracking-tight pt-6 sm:pt-3">
                <Link
                  href="https://www.linkedin.com/company/alchemydesigns/"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </div>
              <div className="text-white text-opacity-75 text-lg font-normal leading-[23px] tracking-tight pt-6 sm:pt-3">
                <Link
                  href="https://www.instagram.com/alchemy_globaldesign?igsh=MWhpNmIyb2N1ajg2bQ=="
                  target="_blank"
                >
                  Instagram
                </Link>
              </div>
              <div className="text-white text-opacity-75 text-lg font-normal leading-[23px] tracking-tight pt-6 sm:pt-3">
                <Link
                  href="https://www.behance.net/alchemyglobalstudio"
                  target="_blank"
                >
                  Behance
                </Link>
              </div>
              <div className="text-white text-opacity-75 text-lg font-normal leading-[23px] tracking-tight pt-6 sm:pt-3">
                <Link
                  href="https://www.facebook.com/profile.php?id=61560205553275"
                  target="_blank"
                >
                  Facebook
                </Link>
              </div>
            </div>
            <div
              className="pl-28 sm:pl-[17%]"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="text-white text-xl sm:text-md font-bold leading-[30px] tracking-tight">
                Site
              </div>
              <Link to="/work">
                <div className="text-white text-opacity-75 text-lg font-normal leading-[23px] tracking-tight pt-6">
                  Work
                </div>
              </Link>
              <Link to="/pricing">
                <div className="text-white text-opacity-75 text-lg font-normal leading-[23px] tracking-tight pt-6 sm:pt-3">
                  Plans
                </div>
              </Link>
              <Link to="/process">
                <div className="text-white text-opacity-75 text-lg font-normal leading-[23px] tracking-tight pt-6 sm:pt-3">
                  Process
                </div>
              </Link>
              <button onClick={handleButtonClick}>
                <div className="text-white text-opacity-75 text-lg font-normal leading-[23px] tracking-tight pt-6 sm:pt-3">
                  Contact
                </div>
              </button>
            </div>
            <div
              className="pl-28 sm:pl-[19%]"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <div className="text-white text-xl sm:text-md font-bold leading-[30px] tracking-tight">
                Other
              </div>
              <div className="text-white text-opacity-75 text-lg font-normal leading-[23px] tracking-tight pt-6">
                Career
              </div>
              <div className="text-white text-opacity-75 text-lg font-normal leading-[23px] tracking-tight pt-6 sm:pt-3">
                Services
              </div>
              <div className="text-white text-opacity-75 text-lg font-normal leading-[23px] tracking-tight pt-6 sm:pt-3">
                Home
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-col sm:-mt-[16%]">
          <div>
            <div className="pl-16 text-white text-opacity-5 text-[210px] font-medium leading-[296px] tracking-tight sm:text-[95px] sm:pl-0 sm:ml-[5%] sm:font-normal">
              alchemy
            </div>
            <div className="text-center sm:ml-[2%] ml-[60%] sm:-mt-[20%] mb-12 sm:mb-0 text-neutral-500 text-md font-medium tracking-tight sm:text-xl">
              © 2023 - 2024 Alchemy
            </div>
          </div>

          <div className="relative pt-60 ml-auto pl-96 sm:ml-0 sm:pl-0 sm:pt-24">
            <img
              className="absolute bottom-0 right-0 z-10 w-auto h-auto sm:w-[70px]"
              src={Ellipse23}
              alt="Ellipse 23"
            />
            <img
              className="absolute bottom-0 right-0 z-20 w-auto h-auto sm:w-[120px]"
              src={Ellipse24}
              alt="Ellipse 24"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
