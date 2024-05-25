import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import star from "../assets/images/star.png";
import yelloEllipse from "../assets/images/yellowEllipse.svg";
import DeliveryIcon from "../assets/images/DeliveryIcon.png";
import Lock from "../assets/images/Lock.png";
import InfiniteIcon from "../assets/images/InfiniteIcon.png";
import Calendar from "../assets/images/Calendar.png";
import WorkIcon from "../assets/images/WorkIcon.png";
import VerifyIcon from "../assets/images/VerifyIcon.png";
import NavFooter from "../components/NavFooter";
import PricingPlans from "../components/PricingPlans";

const Pricing = () => {
  const pricingRef = useRef(null);

  const scrollToPricing = () => {
    pricingRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Section>
        <Navbar />
        <div className="relative">
          {/* Hero */}
          <div>
            <div className="text-center text-neutral-300 text-5xl font-semibold mt-24">
              Design subscriptions suitable for everyone
            </div>
            <div className="text-center text-indigo-600 text-5xl font-semibold mt-3">
              Pause or cancel
              <span className="text-neutral-300"> whenever you like</span>
            </div>

            <div className="mt-10 text-center flex justify-center items-center">
              <div className="text-black text-base font-normal leading-tight tracking-tight mr-2">
                Highly skilled designers
              </div>
              <div className="w-[12px] h-[12px] bg-black rounded-full ml-2 mr-2">
                <img
                  src={star}
                  className="w-[5px] h-auto mt-[3.4px] ml-[3.4px]"
                ></img>
              </div>

              <div className="text-black text-base font-normal leading-tight tracking-tight mr-2 ml-2">
                Endless Design Request
              </div>
              <div className="w-[12px] h-[12px] bg-black rounded-full ml-2 mr-2">
                <img
                  src={star}
                  className="w-[5px] h-auto mt-[3.4px] ml-[3.4px]"
                ></img>
              </div>

              <div className="text-black text-base font-normal leading-tight tracking-tight ml-2">
                All with one easy subscription
              </div>
            </div>
            <div className="text-center mt-14">
              <button
                className="group border bg-black border-gray-700 rounded-[51px] hover:shadow-lg hover:shadow-gray-300"
                onClick={scrollToPricing}
              >
                <div className="group w-[120px] sm:w-[132px] h-9 justify-center items-center gap-2.5 inline-flex">
                  <div className="text-white text-base tracking-tight pb-[2px] flex font-medium">
                    See Plans
                  </div>
                  <img
                    src={yelloEllipse}
                    className="h-[13px] max-w-full group-hover:animate-ping"
                  ></img>
                </div>
              </button>
            </div>
          </div>

          {/* Member Benefits */}
          <div className="mt-20">
            <div className="text-center font-bold text-4xl">
              Benefits of being a member
            </div>
            <div className="text-center mt-4 font-semibold">
              Benefits so exceptional, you won't ever have to seek design
              services elsewhere.
            </div>

            <div className="flex justify-center mt-16">
              <div className="flex justify-center mr-12">
                <div className="flex flex-col items-center text-center">
                  <img src={DeliveryIcon} className="w-[40px] h-auto" />
                  <div className="font-bold mt-2">Fast delivery</div>
                  <div className="text-gray-700 opacity-50 w-[210px] text-xs font-semibold mt-3">
                    Lightning-Fast Design Delivery. Get your designs in record
                    time
                  </div>
                </div>
              </div>

              <div className="flex justify-center ml-12 mr-12 -mt-1">
                <div className="flex flex-col items-center text-center">
                  <img src={Lock} className="w-[30px] h-auto" />
                  <div className="font-bold mt-2">Fixed monthly rate</div>
                  <div className="text-gray-700 opacity-50 w-[210px] text-xs font-semibold mt-3">
                    Unlock Creativity on Demand with a Fixed Monthly Design
                    Subscription
                  </div>
                </div>
              </div>

              <div className="flex justify-center ml-12">
                <div className="flex flex-col items-center text-center">
                  <img src={InfiniteIcon} className="w-[30px] h-auto" />
                  <div className="font-bold mt-4">Unlimited designs</div>
                  <div className="text-gray-700 opacity-50 w-[240px] text-xs font-semibold mt-3">
                    Limitless Design Requests. Your Creative Desires, Our
                    Endless Possibilities
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-20">
              <div className="flex justify-center mr-12">
                <div className="flex flex-col items-center text-center">
                  <img src={Calendar} className="w-[40px] h-auto" />
                  <div className="font-bold mt-2">Pause or cancel anytime</div>
                  <div className="text-gray-700 opacity-50 w-[240px] text-xs font-semibold mt-3">
                    Total Flexibility: Pause or Cancel Anytime, No Strings
                    Attached.
                  </div>
                </div>
              </div>

              <div className="flex justify-center ml-8 mr-12 mt-2">
                <div className="flex flex-col items-center text-center">
                  <img src={WorkIcon} className="w-[30px] h-auto" />
                  <div className="font-bold mt-2">Minimal to no meetings</div>
                  <div className="text-gray-700 opacity-50 w-[210px] text-xs font-semibold mt-3">
                    Streamlined Communication: Minimal to No Calls Required
                  </div>
                </div>
              </div>

              <div className="flex justify-center ml-12">
                <div className="flex flex-col items-center text-center">
                  <img src={VerifyIcon} className="w-[30px] h-auto" />
                  <div className="font-bold mt-4">Complete Ownership</div>
                  <div className="text-gray-700 opacity-50 w-[240px] text-xs font-semibold mt-3">
                    You have complete ownership of your design assets
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Plans */}
          <div className="mt-20"  ref={pricingRef}>
            <div className="text-center font-bold text-4xl">Plans we offer</div>
            <div className="text-center mt-4 font-semibold">
              Select the plan that best suits your needs from the most
              transparent pricing
            </div>
          </div>

          {/* Brochure */}

          <div>
            <PricingPlans />
          </div>
        </div>
      </Section>
      <NavFooter />
    </div>
  );
};

export default Pricing;
