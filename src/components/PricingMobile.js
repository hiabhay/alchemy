import React from "react";
import Section from "../components/Section";
import Check from "../assets/images/Check-circle.png";
import moneyIcon from "../assets/images/moneyIcon.png";
import sendMail from "../assets/images/sendMail.png";
import Link from "gatsby";

const PricingMobile = () => {
  return (
    <Section>
    <div className="mb-16">
      <div className="flex justify-center">
        {/* 1st Plan */}
        <div className="relative bg-indigo-700 w-[250px] h-[420px] rounded-2xl mt-10">
          <button className="relative bg-white w-[105px] h-6 rounded-2xl text-indigo-700 text-[10px] font-semibold left-[48%] top-3">
            MOST POPULAR
          </button>
          <div className="flex relative left-4 top-4">
            <div className="text-white text-3xl font-semibold">$2999</div>
            <div className="w-[59px] text-white opacity-50 text-[16px] font-normal mt-[10px]">
              /month
            </div>
          </div>
          <div className="relative text-white text-xl top-8 left-4">Basic</div>
          <div className="relative text-neutral-200 opacity-50 text-sm font-normal mt-[10px] top-7 left-4">
            Upto 2 requests at a time
          </div>

          <div className="relative top-14 left-4 w-[200px]">
            <div className="relative flex">
              <div className="w-4 h-4 bg-indigo-500 rounded-full">
                <img src={Check}></img>
              </div>
              <div className="relative text-white text-sm bottom-1 left-2 opacity-85">
                2 requests at a time
              </div>
            </div>

            <div className="relative flex top-1">
              <div className="w-4 h-4 bg-indigo-500 rounded-full">
                <img src={Check}></img>
              </div>
              <div className="relative text-white text-sm bottom-1 left-2 opacity-85">
                Endless Users
              </div>
            </div>

            <div className="relative flex top-2">
              <div className="w-4 h-4 bg-indigo-500 rounded-full">
                <img src={Check}></img>
              </div>
              <div className="relative text-white text-sm bottom-1 left-2 opacity-85">
                48-Hour Delivery
              </div>
            </div>

            <div className="relative flex top-3">
              <div className="w-4 h-4 bg-indigo-500 rounded-full">
                <img src={Check}></img>
              </div>
              <div className="relative text-white text-sm bottom-1 left-2 opacity-85">
                Limitless Brands
              </div>
            </div>

            <div className="relative flex top-4">
              <div className="w-4 h-4 bg-indigo-500 rounded-full">
                <img src={Check}></img>
              </div>
              <div className="relative text-white text-sm bottom-1 left-2 opacity-85">
                Pause or cancel anytime
              </div>
            </div>

            <div className="relative flex top-5">
              <div className="w-6 h-[17px] bg-indigo-500 rounded-full">
                <img src={Check}></img>
              </div>
              <div className="relative text-white text-sm bottom-1 left-2 opacity-85">
                Access to paid stock photos and videos
              </div>
            </div>
          </div>

          <div className="relative top-24 left-[20%]">
            <button className="w-[150px] h-10 bg-white rounded-3xl text-indigo-600 font-semibold hover:shadow-2xl">
              Choose Plan
            </button>
          </div>
        </div>
      </div>

      {/* 2nd Plan */}
      <div className="flex justify-center mb-28 mt-10">
        <div className="relative w-[250px] h-[420px] rounded-2xl shadow-2xl shadow-indigo-400">
          <div className="flex relative left-4 top-8">
            <div className="text-black text-3xl font-semibold">$5999</div>
            <div className="w-[59px] text-black opacity-25 text-[16px] font-normal mt-[10px]">
              /month
            </div>
          </div>
          <div className="relative text-indigo-950 text-xl top-10 left-4">
            Pro
          </div>
          <div className="relative text-slate-500 text-sm font-normal mt-[10px] top-9 left-4">
            Unlimited Requests
          </div>

          <div className="relative top-[15%] left-4 w-[200px]">
            <div className="relative flex">
              <div className="w-4 h-4 bg-indigo-500 rounded-full">
                <img src={Check}></img>
              </div>
              <div className="relative text-slate-500 text-sm bottom-1 left-2 opacity-85">
                2 requests at a time
              </div>
            </div>

            <div className="relative flex top-1">
              <div className="w-4 h-4 bg-indigo-500 rounded-full">
                <img src={Check}></img>
              </div>
              <div className="relative text-slate-500 text-sm bottom-1 left-2 opacity-85">
                Endless Users
              </div>
            </div>

            <div className="relative flex top-2">
              <div className="w-4 h-4 bg-indigo-500 rounded-full">
                <img src={Check}></img>
              </div>
              <div className="relative text-slate-500 text-sm bottom-1 left-2 opacity-85">
                48-Hour Delivery
              </div>
            </div>

            <div className="relative flex top-3">
              <div className="w-4 h-4 bg-indigo-500 rounded-full">
                <img src={Check}></img>
              </div>
              <div className="relative text-slate-500 text-sm bottom-1 left-2 opacity-85">
                Limitless Brands
              </div>
            </div>

            <div className="relative flex top-4">
              <div className="w-4 h-4 bg-indigo-500 rounded-full">
                <img src={Check}></img>
              </div>
              <div className="relative text-slate-500 text-sm bottom-1 left-2 opacity-85">
                Pause or cancel anytime
              </div>
            </div>

            <div className="relative flex top-5">
              <div className="w-6 h-[17px] bg-indigo-500 rounded-full">
                <img src={Check}></img>
              </div>
              <div className="relative text-slate-500 text-sm bottom-1 left-2 opacity-85">
                Access to paid stock photos and videos
              </div>
            </div>
          </div>

          <div className="relative top-28 left-[20%]">
            <button className="w-[150px] h-10 bg-white rounded-3xl  font-semibold hover:shadow-lg text-black border-black border-2">
              Choose Plan
            </button>
          </div>
        </div>
      </div>

      <div className="ml-12">
        <img src={sendMail}></img>
        <div className="text-black font-bold text-xl mt-4 w-[200px]">
          <a href="mailto:hello@alchemydesign.xyz">Get in touch</a>
        </div>
        <div className="text-gray-700 font-normal text-sm w-[250px] mt-2">
          Discover the inner workings of Alchemy and explore how it can benefit
          you
        </div>
      </div>

      <div className="w-auto h-[1px] bg-stone-300 mr-12 ml-12 mt-12"></div>

      <div className="ml-12 mt-16">
        <img src={moneyIcon}></img>
        <div className="text-black font-bold text-xl mt-4 w-[200px]">
          <a href="https://forms.gle/r6GEhBfJgdMBGHVd7" target="_blank">
            Refer and earn
          </a>
        </div>
        <div className="text-gray-700 font-normal text-sm w-[250px] mt-2">
          Receive a 10% monthly recurring commission for every successful
          referral
        </div>
      </div>
      </div>
    </Section>
  );
};

export default PricingMobile;
