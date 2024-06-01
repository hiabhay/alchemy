import React from "react";
import Section from "../components/Section";
import Check from "../assets/images/Check-circle.png";
import moneyIcon from "../assets/images/moneyIcon.png";
import sendMail from "../assets/images/sendMail.png";

const PricingPlans = () => {
  const handleGetInTouchClick = () => {
    // Navigate to homepage
    window.location.href = "/";
    // After a short delay, scroll to the bottom of the page
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
  };

  return (
    <Section>
      <div className="flex justify-center mb-20 mt-28">
        <div className="flex">
          <div
            className="w-[1000px] h-[420px] rounded-2xl flex"
            style={{ boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.1)" }}
          >
            {/* 1st Plan */}
            <div className="relative bg-indigo-700 w-[250px] h-[420px] rounded-2xl bottom-8 left-10">
              <button className="relative bg-white w-[105px] h-6 rounded-2xl text-indigo-700 text-[10px] font-semibold left-[48%] top-3">
                MOST POPULAR
              </button>
              <div className="flex relative left-4 top-4">
                <div className="text-white text-3xl font-semibold">$2999</div>
                <div className="w-[59px] text-white opacity-50 text-[16px] font-normal mt-[10px]">
                  /month
                </div>
              </div>
              <div className="relative text-white text-xl top-8 left-4">
                Basic
              </div>
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

            {/* 2nd Plan */}
            <div className="relative w-[240px] h-[420px] rounded-2xl left-20">
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

              <div className="relative top-28 left-5">
                <button className="w-[150px] h-10 bg-white rounded-3xl  font-semibold hover:shadow-lg text-black border-black border-2">
                  Choose Plan
                </button>
              </div>
            </div>

            <div className="bg-stone-300 w-0.5 h-[315px] relative left-24 top-14"></div>
            <div className="absolute left-[60%] mt-16">
              <img src={sendMail} className="w-8 h-auto"></img>
              <div className="text-black font-bold text-xl mt-4">
              <a href="/">Get in touch</a>
              </div>
              <div className="text-gray-700 font-normal text-sm w-[250px] mt-2">
                Discover the inner workings of Alchemy and explore how it can
                benefit you
              </div>
            </div>

            <div className="bg-stone-300 w-0.5 h-[250px] relative left-[26%] top-[20%] rotate-90"></div>

            <div className="absolute left-[60%] mt-[20%]">
              <img src={moneyIcon} className="w-8 h-auto"></img>
              <div className="text-black font-bold text-xl mt-4 cursor-move">
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
        </div>
      </div>
    </Section>
  );
};

export default PricingPlans;
