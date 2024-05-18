import React, { useEffect, useState } from "react";
import Frame from "../assets/images/Frame.svg";
import { Link } from "gatsby";
import Section from "./Section";
import Aos from "aos";
import "aos/dist/aos.css";
import NavHam from "../assets/images/NavHam.png";

const Navbar = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Section>
      <div className="flex justify-between items-center p-4 sm:pb-0 relative">
        {/* Branding */}
        <div>
          <Link to="/">
            <button className="flex items-center ml-12 sm:ml-2">
              <img src={Frame} alt="Logo" className="w-8 h-8" />
              <h1
                className="font-bold pl-2 text-xl"
                data-aos="zoom-in"
                data-aos-duration="400"
              >
                ALCHEMY
              </h1>
            </button>
          </Link>
        </div>

        {/* Navbar Menu */}
        <div className="sm:hidden items-center absolute left-[65%] flex">
          <Link to="/work" className="mr-6">
            <div
              className="text-neutral-400 text-sm font-medium tracking-tight"
              data-aos="zoom-in-up"
              data-aos-duration="500"
            >
              Work
            </div>
          </Link>
          <Link to="/process" className="mr-6">
            <div
              className="text-neutral-400 text-sm font-medium tracking-tight"
              data-aos="zoom-in-up"
              data-aos-duration="600"
            >
              Process
            </div>
          </Link>
          <Link to="/pricing" className="mr-6">
            <div
              className="text-neutral-400 text-sm font-medium tracking-tight"
              data-aos="zoom-in-up"
              data-aos-duration="700"
            >
              Pricing
            </div>
          </Link>
          <Link to="/" className="mr-6">
            <div
              className="text-neutral-400 text-sm font-medium tracking-tight"
              data-aos="zoom-in-up"
              data-aos-duration="800"
            >
              Blogs
            </div>
          </Link>

          <button className="pt-0 ml-4">
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
          {/* <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg> */}
          <img src={NavHam}></img>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden xl:hidden 2xl:hidden ml-2 ${
          isOpen ? "block" : "hidden"
        } -mb-6 mt-2`}
      >
        {/* <Link
          to="/"
          className="block py-2 px-4 text-sm text-neutral-400 font-medium border-b border-neutral-200"
          onClick={toggleMenu}
        >
          Services
        </Link> */}
        <Link
          to="/"
          className="block py-2 px-4 text-sm text-neutral-400 font-medium border-b border-neutral-200"
          onClick={toggleMenu}
        >
          Work
        </Link>
        <Link
          to="/"
          className="block py-2 px-4 text-sm text-neutral-400 font-medium border-b border-neutral-200"
          onClick={toggleMenu}
        >
          Process
        </Link>
        {/* <Link
          to="/"
          className="block py-2 px-4 text-sm text-neutral-400 font-medium border-b border-neutral-200"
          onClick={toggleMenu}
        >
          Plans
        </Link> */}
      </div>
    </Section>
  );
};

export default Navbar;
