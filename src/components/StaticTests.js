import React from "react";
import QuoteIcon from "../assets/images/QuoteIcon.png";
import Ellipse30 from "../assets/images/Ellipse30.png";

const StaticTests = () => {
  return (
    <div className="mt-16">
      <div
        className="bg-white w-[340px] h-[200px] rounded-2xl mx-auto"
        style={{ boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.20)" }}
      >
        <img
          src={QuoteIcon}
          className="w-[30px] h-auto relative top-[11%] left-[6.5%]"
        ></img>
        <div className="text-black w-auto text-sm font-semibold relative top-[14%] text-justify left-[6%] mr-14">
          Tempore velit velit expedita sit culpa ut non. Tempora aut ipsam.
          Quaerat et consequatur nisi et eveniet placeat.
        </div>
        <div className="flex pt-10 pl-6">
          <img src={Ellipse30} className="w-[50px] h-auto"></img>
          <div>
            <div className="font-serif text-xl pl-4">Dewey Considine</div>
            <div className="pl-4 text-sm">CEO MAPLE TECHNOLOGIES</div>
          </div>
        </div>
      </div>
      <div
        className="bg-white w-[340px] h-[200px] rounded-xl mx-auto mt-6"
        style={{ boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.20)" }}
      >
        <img
          src={QuoteIcon}
          className="w-[30px] h-auto relative top-[11%] left-[6.5%]"
        ></img>
        <div className="text-black w-auto text-sm font-semibold relative top-[14%] text-justify left-[6%] mr-14">
          Tempore velit velit expedita sit culpa ut non. Tempora aut ipsam.
          Quaerat et consequatur nisi et eveniet placeat.
        </div>
        <div className="flex pt-10 pl-6">
          <img src={Ellipse30} className="w-[50px] h-auto"></img>
          <div>
            <div className="font-serif text-xl pl-4">Dewey Considine</div>
            <div className="pl-4 text-sm">CEO MAPLE TECHNOLOGIES</div>
          </div>
        </div>
      </div>
      <div
        className="bg-white w-[340px] h-[200px] rounded-xl mx-auto mt-6"
        style={{ boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.20)" }}
      >
        <img
          src={QuoteIcon}
          className="w-[30px] h-auto relative top-[11%] left-[6.5%]"
        ></img>
        <div className="text-black w-auto text-sm font-semibold relative top-[14%] text-justify left-[6%] mr-14">
          Tempore velit velit expedita sit culpa ut non. Tempora aut ipsam.
          Quaerat et consequatur nisi et eveniet placeat.
        </div>
        <div className="flex pt-10 pl-6">
          <img src={Ellipse30} className="w-[50px] h-auto"></img>
          <div>
            <div className="font-serif text-xl pl-4">Dewey Considine</div>
            <div className="pl-4 text-sm">CEO MAPLE TECHNOLOGIES</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticTests;
