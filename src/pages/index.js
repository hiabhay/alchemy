// import * as React from "react";
import React, { useRef } from "react";
import Navbar from "../components/Navbar";
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
import CarouselCheck from "../components/CarouselCheck";
import helmet from "helmet";

export default function Home() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <helmet>
        <title>Alchemy Design</title>
      </helmet>
      <Navbar source="hero" scrollToContact={scrollToContact} />
      <Hero />
      <IntroVideo />
      <Experience />
      <Work />
      <CarouselCheck />
      <Clients />
      <Feedback />
      <Faqs />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer scrollToContact={scrollToContact} />
    </div>
  );
}
