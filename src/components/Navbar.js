import React, { useEffect, useState } from "react";
import Frame from "../assets/images/Frame.svg";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import Section from "./Section";
import Aos from "aos";
import "aos/dist/aos.css";
import NavHam from "../assets/images/NavHam.png";
import indigoArrow from "../assets/images/indigoArrow.png";
import whiteCross from '../assets/images/whiteCross.png'
import alterLogo from '../assets/images/alterLogo.png'

const Navbar = ({ source, scrollToContact }) => {
  const handleButtonClick = () => {
    const isHomepage = window.location.pathname === "/";
  
    if (isHomepage) {
      scrollToContact();
    } else {
      // Set a flag in local storage
      localStorage.setItem("scrollToContact", "true");
      window.location.href = "/";
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (source === "hero") {
      Aos.init({ duration: 500 });
    }
  }, [source]);

  const normalizePath = (path) => path.replace(/\/$/, "");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { to: "/work", label: "Work" },
    { to: "/process", label: "Process" },
    { to: "/pricing", label: "Plans" },
  ];

  return (
    <Section>
      <div className={`flex justify-between items-center p-4 sm:pb-0 relative ${isOpen ? "bg-indigo-600 transition-all duration-100 ease-in-out mb-1" : ""}`}>
        {/* Branding */}
        <div>
          <Link to="/">
            <button className="flex items-center ml-12 sm:ml-2">
              <img src={isOpen ? alterLogo : Frame} alt="Logo" className={`w-8 h-auto ${isOpen ? "mt-1" : ""}`} />
              <h1
                className={`font-bold pl-2 text-xl ${isOpen ? "invisible" : "visible"}`}
              >
                ALCHEMY
              </h1>
            </button>
          </Link>
        </div>

        {/* Navbar Menu */}
        <div className="sm:hidden items-center absolute left-[65%] flex">
          {navItems.map((item, index) => (
            <Link key={item.to} to={item.to} className="mr-6 relative">
              <div
                className={`text-sm tracking-tight font-semibold ${
                  normalizePath(location.pathname) === normalizePath(item.to)
                    ? "text-indigo-600 border-indigo-600"
                    : "text-neutral-400"
                }`}
                data-aos={source === "hero" ? "zoom-in-up" : ""}
                data-aos-duration={
                  source === "hero" ? `${500 + index * 100}` : ""
                }
                style={{
                  position: "relative",
                  paddingBottom: "0.1rem",
                }}
              >
                {item.label}
                {normalizePath(location.pathname) ===
                  normalizePath(item.to) && (
                  <span
                    style={{
                      content: '""',
                      display: "block",
                      width: "70%",
                      height: "1.7px",
                      backgroundColor: "#4f46e5", // Use your desired color code
                      position: "absolute",
                      bottom: "0",
                      left: "3%", // Center the line
                    }}
                  />
                )}
              </div>
            </Link>
          ))}
          <a
            href="https://medium.com/@hello_36790"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="text-neutral-400 text-sm font-medium tracking-tight"
              data-aos={source === "hero" ? "zoom-in-up" : ""}
              data-aos-duration="800"
            >
              Blogs
            </div>
          </a>
          <button className="pt-0 ml-4" onClick={handleButtonClick}>
            <div className="w-[120px] h-10 px-5 py-4 bg-indigo-600 rounded-[51px] shadow-md shadow-slate-400 justify-center items-center inline-flex hover:shadow-none">
              <div className="text-white font-medium text-sm pb-[2px]">
                Contact Us
              </div>
            </div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="pt-0 ml-4 md:hidden xl:hidden 2xl:hidden"
          onClick={toggleMenu}
        >
          <img src={isOpen ? whiteCross : NavHam} alt="Menu" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden xl:hidden 2xl:hidden w-auto bg-indigo-600 transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        } -mt-1`}
      >
        <div className="text-white flex">
          <div className="ml-6 mt-16 mb-12">
            <Link to="/">
              <div className="font-bold text-2xl w-auto mb-8">Home</div>
            </Link>
            <Link to="/work">
              <div className="font-bold text-2xl w-auto mb-8">Work</div>
            </Link>
            <Link to="/pricing">
              <div className="font-bold text-2xl w-auto mb-8">Plan</div>
            </Link>
            <a href="https://medium.com/@hello_36790" target="_blank">
              <div className="font-bold text-2xl w-auto mb-8">Blog</div>
            </a>
          </div>
          <div className="absolute right-[25%] mb-16 mt-16">
            <a
              href="https://www.behance.net/alchemyglobalstudio"
              target="_blank"
            >
              <div className="font-thin text-xl w-auto mb-2">Behance</div>
            </a>
            <a
              href="https://www.instagram.com/alchemy_globaldesign?igsh=MWhpNmIyb2N1ajg2bQ=="
              target="_blank"
            >
              <div className="font-thin text-xl w-auto mb-2">Instagram</div>
            </a>
            <a href="https://dribbble.com/alchemy_global" target="_blank">
              <div className="font-thin text-xl w-auto mb-2">Dribble</div>
            </a>
            <a
              href="https://www.linkedin.com/company/alchemydesigns/"
              target="_blank"
            >
              <div className="font-thin text-xl w-auto mb-2">LinkedIn</div>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61560205553275"
              target="_blank"
            >
              <div className="font-thin text-xl w-auto mb-2">Facebook</div>
            </a>

            <div className="font-thin text-xl w-auto mb-2">Contact Us</div>
          </div>
        </div>
        <div className="h-[270px] bg-slate-950 w-auto text-white">
          <div className="w-[300px] relative top-[15%] left-[5%] text-4xl font-semibold">
            Let's Talk
          </div>
          <div className="w-[350px] relative top-[18%] left-[5%] text-4xl font-semibold">
            & Experience Craft
          </div>
          <div className="w-[200px] relative top-[30%] left-[5%]">
          <button onClick={scrollToContact}>
          <button className="w-[140px] h-[40px] rounded-3xl text-indigo-600 border border-indigo-600 flex">
              <div className="mt-[4px] ml-4">Get in touch</div>
              <img className="mt-[13px] ml-2" src={indigoArrow} />
            </button>
          </button>
            
          </div>
          <div className="relative w-[200px] top-[40%] left-[5%] flex">
            <div className="w-auto text-white opacity-50">India</div>
            <div className="w-auto text-white opacity-50 ml-4">USA</div>
          </div>
        </div>
        {/* {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="block py-2 px-4 text-sm text-neutral-400 font-medium border-b border-neutral-200"
            onClick={toggleMenu}
          >
            {item.label}
          </Link>
        ))}
        <a
          href="https://medium.com/@hello_36790"
          target="_blank"
          rel="noopener noreferrer"
          className="block py-2 px-4 text-sm text-neutral-400 font-medium border-b border-neutral-200"
          onClick={toggleMenu}
        >
          Blogs
        </a> */}
      </div>
    </Section>
  );
};

export default Navbar;
