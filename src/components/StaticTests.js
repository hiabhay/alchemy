import React from "react";
import QuoteIcon from "../assets/images/QuoteIcon.png";
import Ellipse30 from "../assets/images/Ellipse30.png";
import Jay from "../assets/images/Jay.png";
import Shivani from "../assets/images/Shivani.png";
import Yashveer from "../assets/images/Yashveer.png";

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
          Alchemy has been instrumental in transforming our fitness app's user
          experience. Their expertise and creativity have exceeded our
          expectations, resulting in an intuitive and engaging interface.
        </div>
        <div className="flex pt-8 pl-6">
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
        <div className="text-black w-auto text-sm font-semibold relative top-[10%] text-justify left-[6%] mr-14">
          Alchemy team has revolutionized our mattress company's online
          presence. With their innovative designs and flawless development, our
          customers now enjoy a seamless shopping experience.
        </div>
        <div className="flex pt-9 pl-6">
          <img src={Shivani} className="w-[50px] h-auto"></img>
          <div>
            <div className="font-serif text-xl pl-4">Shivani Agarwal</div>
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
          The UI/UX team has played a crucial role in revolutionizing our farm
          supplies vendor app. Their expertise in design and user experience has
          elevated our platform, resulting in an intuitive and user friendly
          app.
        </div>
        <div className="flex pt-9 pl-6">
          <img src={Yashveer} className="w-[50px] h-auto"></img>
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
