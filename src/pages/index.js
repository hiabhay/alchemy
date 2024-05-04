import * as React from "react";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Experience from "../components/Experience";
import IntroVideo from "../components/IntroVideo";
import Clients from "../components/Clients";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import Faqs from "../components/Faqs";
import Contact from "../components/Contact";
import OurDomain from "../components/OurDomain";
import CarouselCheck from "../components/CarouselCheck"

export default function Home() {
  return (
    <div>
      <Hero />
      <IntroVideo />
      <Experience />
      <Work />
      {/* <OurDomain /> */}
      <CarouselCheck/>
      <Clients />
      <Feedback />
      <Faqs />
      <Contact />
      <Footer />
      {/* <CarouselCheck/> */}
    </div>
  );
}
