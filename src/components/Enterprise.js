import React from "react";
import Section from "./Section";

const Enterprise = () => {
  return (
    <Section>
      <div className="relative mt-28">
        <div className="relative left-12 w-[80%]">
          <div className="w-[700px] font-bold text-3xl text-black">
            Tailored to meet your
            <span className="text-indigo-600"> business goals!</span>
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
              <div className="text-indigo-600 tracking-tight leading-normal font-light text-base">Research</div>
              <div className="text-[32px] font-semibold leading-[48px] tracking-tight">Descry</div>
              <div>This process is essential in analyzing and processing user’s preference through knowing insights in users demand and choice.</div>
            </div>
            <div className="relative mt-8 w-[500px] left-[20%] top-4">
              <div className="font-semibold">Requisite Target</div>
              <div className="text-neutral-400">This operation helps us gaining essential knowledge in understanding Company and its product goals by meetings and surveys.</div>
              <div className="mt-6 font-semibold">Market Survey</div>
              <div className="text-neutral-400">Here, our team analysis and surveys its similar product and competitors in the market gathering information, administrating our idea further into reality.</div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="flex">
            <div className="relative left-12 w-[400px]">
              <div className="text-indigo-600 tracking-tight leading-normal font-light text-base">Experience & Visual Design</div>
              <div className="text-[32px] font-semibold leading-[48px] tracking-tight">BLUEPRINT DESIGN</div>
              <div>Our gathered information on goals and requirements leads our UX Design team to create a suitable concept related to the product.</div>
            </div>
            <div className="relative mt-4 w-[500px] left-[20%] top-4">
              <div className="font-semibold">Processing Information</div>
              <div className="text-neutral-400">This process involves constructing the information through establishing and molding them into easily accessible content for the users.</div>
              <div className="mt-6 font-semibold">Visual Design</div>
              <div className="text-neutral-400">Here our team creates a precise and proposed website blueprint with details that attracts the user’s attention towards the product.</div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="flex">
            <div className="relative left-12 w-[400px]">
              <div className="text-indigo-600 tracking-tight leading-normal font-light text-base">Code</div>
              <div className="text-[32px] font-semibold leading-[48px] tracking-tight">CREATION</div>
              <div>The envisioned and revised design is therefore turned into high-quality, pixel-envisioned digital products that will be thus launched into the market</div>
            </div>
            <div className="relative mt-4 w-[500px] left-[20%] top-4">
              <div className="font-semibold">Front-End Engineered Development</div>
              <div className="text-neutral-400">Here we implement fully engineered technology to the development of the product for easy and simplified use for the consumers.</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Enterprise;
