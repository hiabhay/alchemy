import React from "react";
import Section from "./Section";
import DeliveryIcon from "../assets/images/DeliveryIcon.png";
import Lock from "../assets/images/Lock.png";
import InfiniteIcon from "../assets/images/InfiniteIcon.png";
import Calendar from "../assets/images/Calendar.png";
import WorkIcon from "../assets/images/WorkIcon.png";
import VerifyIcon from "../assets/images/VerifyIcon.png";

const MobilePlans = () => {
  return (
    <Section>
      <div>
        <div className="flex justify-center mt-8">

          <div className="flex justify-center mr-4">
            <div className="flex flex-col items-center text-center">
              <img src={DeliveryIcon} className="w-[40px] h-auto" />
              <div className="font-bold mt-2">Fast delivery</div>
              <div className="text-gray-700 opacity-50 w-[130px] text-xs font-semibold mt-3">
                Lightning-Fast Design Delivery. Get your designs in record time
              </div>
            </div>
          </div>
          <div className="flex justify-center -mt-2 ml-4">
            <div className="flex flex-col items-center text-center">
              <img src={Lock} className="w-[30px] h-auto" />
              <div className="font-bold mt-2">Fixed monthly rate</div>
              <div className="text-gray-700 opacity-50 w-[160px] text-xs font-semibold mt-3">
              Unlock Creativity<br/> with a Fixed Monthly<br/> Design Subscription
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">

          <div className="flex justify-center mr-4">
            <div className="flex flex-col items-center text-center">
              <img src={InfiniteIcon} className="w-[40px] h-auto" />
              <div className="font-bold mt-2">Unlimited Designs</div>
              <div className="text-gray-700 opacity-50 w-[130px] text-xs font-semibold mt-3">
              Limitless Design<br></br> Requests for Your<br></br> Creative Desires
              </div>
            </div>
          </div>
          <div className="flex justify-center -mt-2 ml-4">
            <div className="flex flex-col items-center text-center">
              <img src={Calendar} className="w-[30px] h-auto" />
              <div className="font-bold mt-2">Pause or Cancel</div>
              <div className="text-gray-700 opacity-50 w-[160px] text-xs font-semibold mt-3">
              Total Flexibility: Pause<br></br> or Cancel Anytime, No<br></br> Strings Attached.
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">

          <div className="flex justify-center mr-4">
            <div className="flex flex-col items-center text-center">
              <img src={WorkIcon} className="w-[40px] h-auto" />
              <div className="font-bold mt-2">Minimal Meetings</div>
              <div className="text-gray-700 opacity-50 w-[130px] text-xs font-semibold mt-3">
              Communication:<br></br> Minimal Calls<br></br> Required
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-2 ml-4">
            <div className="flex flex-col items-center text-center">
              <img src={VerifyIcon} className="w-[30px] h-auto" />
              <div className="font-bold mt-2">Ownership</div>
              <div className="text-gray-700 opacity-50 w-[160px] text-xs font-semibold mt-3">
              You have complete<br></br> ownership of your<br></br> design assets
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MobilePlans;
