import React, { useState } from "react";
import Section from "../components/Section";
import Navbar from "../components/Navbar";
import Enterprise from "../components/Enterprise";
import Startup from "../components/Startup";
import NavFooter from "../components/NavFooter";
import Footer from "../components/Footer";

const Process = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => setIsToggled(!isToggled);

  return (
    <div>
      <Section>
        <Navbar />
        <div className="relative mb-28">
          <div className="justify-center flex mt-10 space-x-4">
            <div>
              <div className="text-black text-xl font-light leading-[30px] tracking-tight">
                Process for
              </div>
              {/* Toggle button */}
              <div className="mt-4 flex items-center absolute left-[43%]">
                <button
                  onClick={toggle}
                  className="relative w-[205px] h-10 flex items-center bg-neutral-100 border-neutral-200 rounded-full p-1 cursor-pointer transition-colors border shadow-inner"
                >
                  <span className="text-stone-300 text-sm font-semibold ml-3 mb-1">
                    Enterprise
                  </span>
                  <span className="text-stone-300 text-sm font-semibold ml-11 mb-1">
                    Startup
                  </span>
                  <div
                    className={`absolute w-[100px] h-8 rounded-full shadow-2xl transform transition-transform flex items-center justify-center ${
                      isToggled
                        ? "bg-gradient-to-r from-indigo-600 to-indigo-800 translate-x-24"
                        : "bg-gradient-to-r from-indigo-600 to-indigo-800 translate-x-0"
                    }`}
                    style={{ boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.2)" }}
                  >
                    <span
                      className={`text-white leading-[30px] font-normal tracking-tight absolute top-0 left-4 ${
                        isToggled ? "left-7" : ""
                      }`}
                    >
                      {isToggled ? "Startup" : "Enterprise"}
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          {isToggled ? <Startup /> : <Enterprise />}
        </div>
      </Section>
      {/* <NavFooter/> */}
      <Footer />
    </div>
  );
};

export default Process;
