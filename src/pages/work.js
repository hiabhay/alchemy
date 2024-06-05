import React, { useEffect } from "react";
import Section from "../components/Section";
import Navbar from "../components/Navbar";
import firstWork from "../assets/images/firstWork.png";
import secWork from "../assets/images/secWork.png";
import thirdWork from "../assets/images/thirdWork.png";
import fourthWork from "../assets/images/fourthWork.png";
import helmet from "helmet";
import kalcowork from "../assets/images/kalcowork.png";
import afleetwork from "../assets/images/afleetwork.png";
import auraaiwork from "../assets/images/auraaiwork.png";
import huddlework from "../assets/images/huddlework.png";
import petitfeework from "../assets/images/petitfeework.png";
import wemeetup from "../assets/images/wemeetup.png";
import beyondorganicwork from "../assets/images/beyondorganicwork.png";
import crystalmatfoamwork from "../assets/images/crystalmatfoamwork.png";
import Footer from "../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div>
      <helmet>
        <title>Work | Alchemy</title>
      </helmet>
      <Section>
        <Navbar />
        <div className="relative mb-44">
          <div className="absolute top-10 left-[5%]">
            <div className="text-neutral-300 text-lg font-semibold">
              Our Work
            </div>
            <div className="text-black text-3xl mt-1 font-bold">
              Featured<span className="text-indigo-600"> Stories</span>
            </div>
          </div>
          <div className="flex justify-center relative top-44 sm:flex-col md:left-32" data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800">
            <div className="mr-28 sm:mr-0 md:mr-0">
              <a href="https://crystalfasteners.com/" target="_blank">
                <img
                  src={firstWork}
                  className="max-w-full sm:w-[350px] sm:mx-auto h-[700px] sm:h-auto hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </a>

              <div className="font-bold text-lg mt-4 sm:ml-6">
                Crystal Fasteners
              </div>
              <div className="font-semibold text-gray-700 text-lg mt-2 w-[440px] sm:w-auto sm:ml-6 sm:mr-6 text-justify">
                A leading brand of fastners & nails. Located in the steel belt
                of India, making it convenient to access finest quality of steel
              </div>
            </div>
            <div className="ml-28 sm:ml-0 sm:mt-10" data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800">
              <a
                href="https://www.behance.net/gallery/199520897/Turf-eSports-Companion"
                target="_blank"
              >
                <img
                  src={secWork}
                  className="max-w-full h-[550px] sm:w-[350px] sm:mx-auto sm:h-auto hover:scale-105 transition-transform duration-300 ease-in-out"
                ></img>
              </a>

              <div className="font-bold text-lg mt-4 sm:ml-6">Turf</div>
              <div className="font-semibold text-gray-700 text-lg mt-2 w-[440px] sm:w-auto sm:ml-6 sm:mr-6 text-justify">
                A leading brand of fastners & nails. Located in the steel belt
                of India, making it convenient to access finest quality of steel
              </div>
            </div>
          </div>
          <div className="flex justify-center relative mt-60" data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800">
            <div>
              <a
                href="https://www.behance.net/gallery/197152737/Notch"
                target="_blank"
              >
                <img
                  src={thirdWork}
                  className="max-w-full h-[350px] sm:w-[350px] overflow-hidden sm:mx-auto sm:h-auto hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </a>

              <div className="font-bold text-lg mt-4 sm:ml-6">Notch</div>
              <div className="font-semibold text-gray-700 text-lg mt-2 sm:w-auto sm:ml-6 sm:mr-6 text-justify">
                A leading brand of fastners & nails. Located in the steel belt
                of India, making it convenient to access finest quality of steel
              </div>
            </div>
          </div>
          <div className="flex justify-center relative top-24 sm:flex-col sm:top-12" data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800">
            <div className="mr-28 sm:mr-0">
              <a href="https://instaraise.io/" target="_blank">
                <img
                  src={fourthWork}
                  className="max-w-full h-[500px] sm:w-[350px] sm:h-auto sm:mx-auto hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </a>

              <div className="font-bold text-lg mt-4 sm:ml-6">Instaraise</div>
              <div className="font-semibold text-gray-700 text-lg mt-2 w-[440px] sm:w-auto sm:ml-6 sm:mr-6 text-justify">
                A leading brand of fastners & nails. Located in the steel belt
                of India, making it convenient to access finest quality of steel
              </div>
            </div>
            <div className="ml-28 sm:ml-0 sm:mt-12" data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800">
              <a
                href="https://www.behance.net/gallery/200065343/Afleet-Marketing-SaaS"
                target="_blank"
              >
                <img
                  src={afleetwork}
                  className="max-w-full sm:w-[350px] w-[450px] sm:h-auto sm:mx-auto h-[550px] hover:scale-105 transition-transform duration-300 ease-in-out"
                ></img>
              </a>

              <div className="font-bold text-lg mt-4 sm:ml-6">
                Afleet.io | UX/UI
              </div>
              <div className="font-semibold text-gray-700 text-lg mt-2 w-[440px] sm:w-auto sm:ml-6 sm:mr-6 text-justify">
                Leverage the potential of user engagement to transform ordinary
                users into an impassioned brand ambassador army.
              </div>
            </div>
          </div>
          <div className="flex justify-center relative top-44 sm:flex-col mr-24 sm:mr-0" data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800">
            <div className="mr-28 sm:mr-0 md:mr-0">
              <a
                href="https://www.behance.net/gallery/200050859/Kalco-Configurator"
                target="_blank"
              >
                <img
                  src={kalcowork}
                  className="max-w-full sm:w-[350px] sm:mx-auto h-[700px] sm:h-auto hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </a>

              <div className="font-bold text-lg mt-4 sm:ml-6 sm:w-auto sm:mr-6">
                Kalco Config. | UX/UI
              </div>
              <div className="font-semibold text-gray-700 text-lg mt-2 w-[440px] sm:w-auto sm:ml-6 sm:mr-6 text-justify">
                The Door Configurator Web Application is a user-friendly
                platform designed to empower users to customize door designs
                according to their preferences and specifications
              </div>
            </div>
            <div className="ml-28 sm:ml-0 sm:mt-10" data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800">
              <img
                src={auraaiwork}
                className="max-w-full h-[550px] sm:w-[350px] sm:mx-auto sm:h-auto hover:scale-105 transition-transform duration-300 ease-in-out"
              ></img>
              <div className="font-bold text-lg mt-4 sm:ml-6 sm:w-auto sm:mr-6">
                Auro | UI
              </div>
              <div className="font-semibold text-gray-700 text-lg mt-2 w-[340px] sm:w-auto sm:ml-6 sm:mr-6 text-justify">
                An app that allows to record voice notes, categorizes them and
                generates summary/ keypoints
              </div>
            </div>
          </div>
          <div className="flex justify-center relative top-48 sm:flex-col" data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800">
            <div className="sm:mr-0 mr-8 overflow-hidden">
              <a
                href="https://www.instagram.com/petitfee_india/"
                target="_blank"
              >
                <img
                  src={petitfeework}
                  className="w-[500px] h-auto sm:w-[350px] sm:mx-auto hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden mr-44"
                />
              </a>

              <div className="font-bold text-lg mt-4 sm:ml-6 sm:w-auto sm:mr-6">
                Petitfee | Branding | Social media posts
              </div>
              <div className="font-semibold text-gray-700 text-lg mt-2 w-[440px] sm:w-auto sm:ml-6 sm:mr-6 text-justify">
                Petitfee brings you your non negotiable skin care routine. The
                products are made in a way that it is super easy to use and can
                be inculcated in your daily routine
              </div>
            </div>
            <div className="sm:ml-0 sm:mt-10 sm:w-auto" data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800">
              <img
                src={wemeetup}
                className="w-[400px] h-auto sm:w-[350px] sm:mx-auto hover:scale-105 transition-transform duration-300 ease-in-out mr-4 overflow-hidden -ml-16"
              ></img>
              <div className="font-bold text-lg mt-4 sm:ml-6 sm:w-auto sm:mr-6 -ml-16">
                Web3 Meetup | UX
              </div>
              <div className="font-semibold text-gray-700 text-lg mt-2 w-[340px] sm:w-auto sm:ml-6 sm:mr-6 text-justify -ml-16">
                Where India’s web 3 meetup community talks
              </div>
            </div>
          </div>
          <div className="flex justify-center relative top-60 sm:flex-col md:left-32" data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800">
            <div className="mr-32 pr-6 sm:pr-0 sm:mr-0">
              <a
                href="https://www.behance.net/gallery/200051341/Beyond-Organic-Branding"
                target="_blank"
              >
                <img
                  src={beyondorganicwork}
                  className="w-[400px] h-auto sm:w-[350px] sm:mx-auto hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </a>

              <div className="font-bold text-lg mt-4 sm:ml-6 sm:w-auto sm:mr-6">
                Beyond Organic | Package Design
              </div>
              <div className="font-semibold text-gray-700 text-lg mt-2 w-[440px] sm:w-auto sm:ml-6 sm:mr-6 text-justify">
                Organic grown products from farm to your table.
              </div>
            </div>
            <div className="ml-16 sm:ml-0 sm:mt-10 w-[400px] sm:w-auto h-[600px] overflow-hidden" data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800">
              <a
                href="https://www.behance.net/gallery/200051095/Crystal-Matform-Social-Media"
                target="_blank"
              >
                <img
                  src={crystalmatfoamwork}
                  className="max-w-full h-auto sm:w-[350px] sm:mx-auto sm:h-auto hover:scale-105 transition-transform duration-300 ease-in-out sm:ml-[27%] overflow-hidden"
                ></img>
              </a>

              <div className="font-bold text-lg mt-4 sm:ml-6 sm:w-auto sm:mr-6">
                Crystal Mattress | Branding | Social Media Posts
              </div>
              <div className="font-semibold text-gray-700 text-lg mt-2 w-[340px] sm:w-auto sm:ml-6 sm:mr-6 text-justify">
                Premium mattress manufacturers applauded for its ergonomical
                designs
              </div>
            </div>
          </div>
          <div className="flex justify-center relative mt-60 sm:mt-44" data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800">
            <div>
              <img
                src={huddlework}
                className="max-w-full w-[1050px] h-[350px] sm:w-[350px] overflow-hidden sm:mx-auto sm:h-auto hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <div className="font-bold text-lg mt-4 sm:ml-6">
                Huddle | Branding
              </div>
              <div className="font-semibold text-gray-700 text-lg mt-2 sm:w-auto sm:ml-6 sm:mr-6 text-justify">
                Packaged design concepts and complete brand guidelines for an
                upcoming sports application
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* <NavFooter/> */}
      <Footer />
    </div>
  );
};

export default Work;
