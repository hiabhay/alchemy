import React, { useRef } from "react";
import Section from "./Section";
import DeliveryIcon from "../assets/images/DeliveryIcon.png";
import Lock from "../assets/images/Lock.png";
import InfiniteIcon from "../assets/images/InfiniteIcon.png";
import Calendar from "../assets/images/Calendar.png";
import WorkIcon from "../assets/images/WorkIcon.png";
import VerifyIcon from "../assets/images/VerifyIcon.png";

const PCPlans = () => {
  return (
    <Section>
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
    </Section>
  )
}

export default PCPlans