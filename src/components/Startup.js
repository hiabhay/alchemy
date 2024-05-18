import React from "react";
import Section from "../components/Section";

const Startup = () => {
  return (
    <Section>
      <div className="relative mt-28">
        <div className="relative left-12 w-[80%]">
          <div className="w-[700px] font-bold text-3xl text-black">
            Launch your<span className="text-indigo-600"> MVP</span> in the
            market
          </div>
          <div className="w-[80%] mt-6 text-neutral-400 font-light leading-[30px] tracking-tight">
            The below steps ensure high-quality products with high-end
            engineered development. The envisioned design is transformed into
            reality with easy accessible features and design essentials.
          </div>
        </div>
        <div className="mt-16">
          <div className="flex">
            <div className="relative left-12 w-[400px]">
              <div className="text-indigo-600 tracking-tight leading-normal font-light text-base">
                UX Research
              </div>
              <div className="text-[32px] font-semibold leading-[48px] tracking-tight">
                Creation
              </div>
              <div>
                Through understanding requirements, product aim, user’s
                preference and current situation of the product therefore
                assists us in creating unique ideas.
              </div>
            </div>
            <div className="relative mt-8 w-[500px] left-[20%] top-4">
              <div className="font-semibold">Descry Atelier</div>
              <div className="text-neutral-400">
                A workshop to gather information on the product and
                requirements. This assists in crafting diverse approach to the
                necessities and objectives.
              </div>
              <div className="mt-6 font-semibold">Swift Exemplar</div>
              <div className="text-neutral-400">
                Testing the product for user’s input, difficulty level faced by
                them, malfunctions, and their experience while using the
                product.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="flex">
            <div className="relative left-12 w-[400px]">
              <div className="text-indigo-600 tracking-tight leading-normal font-light text-base">
                Development
              </div>
              <div className="text-[32px] font-semibold leading-[48px] tracking-tight">
                Initiating Process
              </div>
              <div>
                The visioned and revised design is therefore turned into high
                quality, pixel envision digital products that will be thus
                launched into the market.
              </div>
            </div>
            <div className="relative mt-4 w-[500px] left-[20%] top-4">
              <div className="font-semibold">
                Front-End Engineered Development
              </div>
              <div className="text-neutral-400">
                Here we implement fully engineered technology to the development
                of the project for easy and simplified use.
              </div>
              <div className="mt-6 font-semibold">Quality Trail</div>
              <div className="text-neutral-400">
                The products are quality verified for glitches and malfunctions
                to provide the users for correct and tested products. That meets
                the requirements of the users.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Startup;
