import React, { useState } from "react";
import Section from "../components/Section";
import Design from "../components/FaqCards/Design";
import Development from "../components/FaqCards/Development";
import Branding from "../components/FaqCards/Branding";

const Faqs = () => {
  const [activeComponent, setActiveComponent] = useState("design");

  function handleButtonClick(component) {
    setActiveComponent(component);
  }

  return (
    <Section color="bg-slate-950">
      <div className="h-auto">
        <div className="pt-12 text-center text-white text-4xl font-semibold leading-[44px] sm:text-2xl">
          Frequently asked questions
        </div>
        <div className="text-center pt-8 pb-2 sm:pl-2 flex justify-center">
          {/* Button 1 */}
          <button
            onClick={() => handleButtonClick("design")}
            className={`text-neutral-400 text-md font-semibold rounded-3xl w-[100px] h-[40px] leading-7 ${
              activeComponent === "design"
                ? "bg-indigo-600 text-white"
                : "bg-slate-950 text-neutral-400"
            }`}
          >
            Design
          </button>

          {/* Button 2 */}
          <button
            onClick={() => handleButtonClick("development")}
            className={`text-neutral-400 text-md font-semibold rounded-3xl ml-12 sm:ml-4 w-[130px] h-[40px] leading-7 ${
              activeComponent === "development"
                ? "bg-indigo-600 text-white"
                : "bg-slate-950 text-neutral-400"
            }`}
          >
            Development
          </button>

          {/* Button 3 */}
          <button
            onClick={() => handleButtonClick("branding")}
            className={`text-neutral-400 text-md font-semibold rounded-3xl ml-12 sm:ml-3 w-[100px] h-[40px] leading-7 ${
              activeComponent === "branding"
                ? "bg-indigo-600 text-white"
                : "bg-slate-950 text-neutral-400"
            }`}
          >
            Branding
          </button>
        </div>

        {/* Render the active component based on state */}
        {activeComponent === "design" && <Design />}
        {activeComponent === "development" && <Development />}
        {activeComponent === "branding" && <Branding />}
      </div>
    </Section>
  );
};

export default Faqs;
