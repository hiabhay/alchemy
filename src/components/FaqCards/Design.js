import React, { useState, useEffect } from "react";
import Section from "../Section";
import minusCircle from "../../assets/images/minus-circle.png";
import plusCircle from "../../assets/images/plus-circle.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Design = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleVisibility = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section color="bg-slate-950">
      <div className="text-center ml-32 pt-8 pb-20 h-auto sm:ml-[4%]">
        {/* Heading */}
        <div
          className="max-w-[720px] sm:w-auto mx-auto flex items-start"
          data-aos="fade-up"
        >
          <div className="flex-none text-white text-lg font-semibold leading-7 mr-2 sm:text-sm">
            What is your core services as a UI/UX agency?
          </div>
          <button button onClick={() => toggleVisibility(0)}>
            <img
              src={openIndex === 0 ? minusCircle : plusCircle}
              className="max-w-full h-5 left-[86%] absolute"
            ></img>
          </button>
        </div>

        {/* Actual Paragraph */}
        <div
          className={`max-w-[720px] sm:w-auto pr-36 sm:pr-3 mx-auto text-justify text-neutral-400 text-opacity-60 text-sm font-normal leading-normal mt-2 sm:-ml-1 transition-max-h duration-500 ease-in-out ${
            openIndex === 0 ? "max-h-[500px]" : "max-h-0 overflow-hidden"
          }`}
        >
          As a UI/UX agency, our core services revolve around creating
          exceptional digital experiences for our clients. We begin by
          conducting thorough user research to gain insights into your target
          audience's needs and behaviors. With this understanding, we proceed to
          design intuitive and user-friendly interfaces that enhance the overall
          user experience. Our UI designs are visually appealing, reflecting
          your brand identity while engaging users effectively. We then develop
          interactive prototypes to visualize the user journey and gather
          feedback for refinement. Through usability testing, we identify areas
          for improvement, ensuring that your digital product meets the highest
          standards of usability and functionality. Additionally, we offer
          design consultation services, providing expert guidance and
          recommendations to help you achieve your design goals effectively
        </div>
        <div
          className="w-[643px] mt-4 h-px ml-[216px] sm:ml-0 sm:mx-auto sm:w-[350px] bg-gray-500"
          data-aos="fade-up"
        />

        {/* Heading */}
        <div
          className="max-w-[720px] sm:w-auto mx-auto flex items-start pt-4"
          data-aos="fade-up"
        >
          <div className="flex-none text-white text-lg font-semibold leading-7 mr-2 sm:text-sm">
            How much does our service cost?
          </div>
          <button onClick={() => toggleVisibility(1)}>
            <img
              src={openIndex === 1 ? minusCircle : plusCircle}
              className="max-w-full h-5 absolute left-[86%]"
            ></img>
          </button>
        </div>

        {/* Actual Paragraph */}
        <div
          className={`max-w-[720px] sm:w-auto sm:pr-3 sm:-ml-1 pr-36 mx-auto text-justify text-neutral-400 text-opacity-60 text-sm font-normal leading-normal mt-2 transition-max-h duration-500 ease-in-out ${
            openIndex === 1 ? "max-h-[500px]" : "max-h-0 overflow-hidden"
          }`}
        >
          We understand the need for flexibility in budget so we make sure we
          understand your requirements well and help you with the most
          reasonable support within your budget. Our commitment lies in
          delivering tailored solutions that align precisely with the unique
          needs of our clients. Whether it entails a comprehensive suite of
          services or a bespoke strategy designed to accommodate specific budget
          considerations, we are dedicated to meeting their individual
          requirements.
        </div>
        <div
          className="w-[643px] mt-4 h-px ml-[216px] sm:ml-0 sm:mx-auto sm:w-[350px] bg-gray-500"
          data-aos="fade-up"
        />

        {/* Heading */}
        <div
          className="max-w-[720px] sm:w-auto mx-auto flex items-start pt-4"
          data-aos="fade-up"
        >
          <div className="flex-none text-white text-lg font-semibold leading-7 mr-2 sm:text-sm">
            What are your different payment models?
          </div>
          <button onClick={() => toggleVisibility(2)}>
            <img
              src={openIndex === 2 ? minusCircle : plusCircle}
              className="max-w-full h-5 absolute left-[86%]"
            ></img>
          </button>
        </div>

        {/* Actual Paragraph */}
        <div
          className={`max-w-[720px] sm:auto sm:pr-3 sm:-ml-1 pr-36 mx-auto text-justify text-neutral-400 text-opacity-60 text-sm font-normal leading-normal mt-2 transition-max-h duration-500 ease-in-out ${
            openIndex === 2 ? "max-h-[500px]" : "max-h-0 overflow-hidden"
          }`}
        >
          <span className="font-bold">Fixed Model: </span>
          In the fixed model, Alchemy and the client agree upon a predetermined
          price for a specific scope of work. This model is ideal for projects
          with well-defined requirements and timelines, providing clients with
          cost predictability and clarity on deliverables and budget upfront.
          <br />
          <br />
          <span className="font-bold">Retainer Model: </span> The retainer model
          involves an ongoing partnership where clients pay a recurring fee for
          a set number of hours or services per month. With this model, clients
          gain flexibility and access to Alchemy's expertise on an as-needed
          basis, allowing them to scale resources up or down as required.
          <br />
          <br />
          <span className="font-bold">Subscription Model: </span>In the
          subscription model, clients pay a recurring fee for access to
          Alchemy’s services or products on a subscription basis. This model
          offers clients access to a range of services or tools at a fixed
          monthly or annual fee, providing cost savings compared to ad-hoc
          engagements.
        </div>
        <div
          className="w-[643px] mt-4 h-px ml-[216px] sm:ml-0 sm:mx-auto sm:w-[350px] bg-gray-500"
          data-aos="fade-up"
        />

        {/* Heading */}
        <div
          className="max-w-[720px] sm:w-auto mx-auto flex items-start pt-4"
          data-aos="fade-up"
        >
          <div className="flex-none text-white text-lg sm:text-sm font-semibold leading-7 mr-2">
            Do we work with Startups?
          </div>
          <button onClick={() => toggleVisibility(3)}>
            <img
              src={openIndex === 3 ? minusCircle : plusCircle}
              className="max-w-full h-5 absolute left-[86%]"
            ></img>
          </button>
        </div>

        {/* Actual Paragraph */}
        <div
          className={`max-w-[720px] sm:w-auto sm:pr-3 sm:-ml-1 pr-36 mx-auto text-justify text-neutral-400 text-opacity-60 text-sm font-normal leading-normal mt-2 transition-max-h duration-500 ease-in-out ${
            openIndex === 3 ? "max-h-[500px]" : "max-h-0 overflow-hidden"
          }`}
        >
          Yes, we work with startups of all sizes and stages. Whether you're a
          budding entrepreneur with a groundbreaking idea or an early-stage
          startup looking to refine your product, we're here to help. Our team
          understands the unique challenges and opportunities that startups
          face, and we're passionate about supporting innovative ventures. From
          MVP development to scaling your product for growth, we provide
          tailored solutions to meet your specific needs and budget constraints.
          Our goal is to empower startups to thrive in a competitive landscape
          by delivering high-quality design services that drive user engagement
          and business success.
        </div>
        <div
          className="w-[643px] mt-4 h-px ml-[216px] sm:ml-0 sm:mx-auto sm:w-[350px] bg-gray-500"
          data-aos="fade-up"
        />

        {/* Heading */}
        <div
          className="max-w-[720px] sm:w-auto mx-auto flex items-start pt-4"
          data-aos="fade-up"
        >
          <div className="flex-none text-white text-lg sm:text-sm font-semibold leading-7 mr-2">
            Do we work with B2B/SaaS?
          </div>
          <button onClick={() => toggleVisibility(4)}>
            <img
              src={openIndex === 4 ? minusCircle : plusCircle}
              className="max-w-full h-5 absolute left-[86%]"
            ></img>
          </button>
        </div>

        {/* Actual Paragraph */}
        <div
          className={`max-w-[720px] sm:w-auto sm:pr-3 sm:-ml-1 pr-36 mx-auto text-justify text-neutral-400 text-opacity-60 text-sm font-normal leading-normal mt-2 transition-max-h duration-500 ease-in-out ${
            openIndex === 4 ? "max-h-[500px]" : "max-h-0 overflow-hidden"
          }`}
        >
          Yes, we specialize in serving B2B and SaaS (Software as a Service)
          companies. Our team has extensive experience in designing user
          interfaces and experiences tailored specifically for B2B and SaaS
          products. We understand the unique needs and challenges of these
          industries, such as complex user workflows, data visualization, and
          integration with other platforms. Whether you're a startup launching a
          new B2B solution or an established SaaS company looking to enhance
          your existing product, we can help. Our goal is to create intuitive
          and user-friendly designs that drive user adoption, increase customer
          satisfaction, and ultimately, contribute to the success of your B2B or
          SaaS venture.
        </div>
        <div
          className="w-[643px] mt-4 h-px ml-[216px] sm:ml-0 sm:mx-auto sm:w-[350px] bg-gray-500"
          data-aos="fade-up"
        />
      </div>
    </Section>
  );
};

export default Design;
