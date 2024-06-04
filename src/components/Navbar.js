import React, { useEffect, useState } from "react";
import Frame from "../assets/images/Frame.svg";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import Section from "./Section";
import Aos from "aos";
import "aos/dist/aos.css";
import NavHam from "../assets/images/NavHam.png";

const Navbar = ({ source }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (source === "hero") {
      Aos.init({ duration: 500 });
    }
  }, [source]);

  // Normalize pathname to remove trailing slashes
  const normalizePath = (path) => path.replace(/\/$/, "");

  // useEffect(() => {
  //   console.log("Current path:", location.pathname);
  // }, [location.pathname]);

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
          <a href="mailto:hello@alchemydesign.xyz">
            <button className="pt-0 ml-4">
              <div className="w-[120px] h-10 px-5 py-4 bg-indigo-600 rounded-[51px] shadow-md shadow-slate-400 justify-center items-center inline-flex hover:shadow-none">
                <div className="text-white font-medium text-sm pb-[2px]">
                  Contact Us
                </div>
              </div>
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="pt-0 ml-4 md:hidden xl:hidden 2xl:hidden"
          onClick={toggleMenu}
        >
          <img src={NavHam} alt="Menu" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden xl:hidden 2xl:hidden ml-2 ${
          isOpen ? "block" : "hidden"
        } -mb-6 mt-2`}
      >
        {navItems.map((item) => (
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
        </a>
      </div>
    </Section>
  );
};

export default Navbar;
