import React from "react";
import QuoteIcon from "../assets/images/QuoteIcon.png";
import Ellipse30 from "../assets/images/Ellipse30.png";
import Jay from "../assets/images/Jay.png";
import Shivani from "../assets/images/Shivani.png";
import Yashveer from "../assets/images/Yashveer.png";
import Aditya from "../assets/images/Aditya.png";
import Shahil from "../assets/images/Shahil.jpg";

const StaticTests = () => {
  return (
    <div className="mt-16">
      <div
        className="bg-white w-[340px] h-[240px] rounded-2xl mx-auto"
        style={{ boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.20)" }}
      >
        <img
          src={QuoteIcon}
          className="w-[30px] h-auto relative top-[8%] left-[6.5%]"
        ></img>
        <div className="text-black w-auto text-sm font-semibold relative top-[10%] text-justify left-[6%] mr-14">
          Working with Alchemy Design was transformative. Their collaborative,
          innovative UX approach brought a unique perspective to our projects.
          Highly recommended.
        </div>
        <div className="flex relative top-[17%] pl-6">
          <img src={Jay} className="w-[50px] h-auto"></img>
          <div>
            <div className="font-serif text-xl pl-4">Jay Gandhi</div>
            <div className="pl-4 text-sm">CTO Notch</div>
          </div>
        </div>
      </div>
      <div
        className="bg-white w-[340px] h-[230px] rounded-2xl mx-auto mt-6"
        style={{ boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.20)" }}
      >
        <img
          src={QuoteIcon}
          className="w-[30px] h-auto relative top-[8%] left-[6.5%]"
        ></img>
        <div className="text-black w-auto text-sm font-semibold relative top-[12%] text-justify left-[6%] mr-14">
          The overall work experience with your company is great the best part
          is you complete the work within the given timeline.
        </div>
        <div className="flex relative top-[27%] pl-6">
          <img src={Shivani} className="w-[50px] h-auto"></img>
          <div>
            <div className="font-serif text-xl pl-4">Shivani Poddar</div>
            <div className="pl-4 text-sm">CEO Crystal Mat-Foam</div>
          </div>
        </div>
      </div>
      <div
        className="bg-white w-[340px] h-[245px] rounded-2xl mx-auto mt-6"
        style={{ boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.20)" }}
      >
        <img
          src={QuoteIcon}
          className="w-[30px] h-auto relative top-[8%] left-[6.5%]"
        ></img>
        <div className="text-black w-auto text-sm font-semibold relative top-[10%] text-justify left-[6%] mr-14">
          Choosing Alchemy was the best decision for our website! Their
          creativity and expertise turned our vision into a stunning reality.
          Highly recommend!
        </div>
        <div className="flex relative top-[27%] pl-6">
          <img src={Shahil} className="w-[50px] h-[50px] rounded-full"></img>
          <div>
            <div className="font-serif text-xl pl-4">Yashveer Talan</div>
            <div className="pl-4 text-sm">CEO Krishi Tokri</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticTests;
