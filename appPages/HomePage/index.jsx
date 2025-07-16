import Header from "@/components/Header/Header";
import About from "@/components/home/About";
import Facts from "@/components/home/Facts";
import Hero from "@/components/home/Hero";
import HowItWork from "@/components/home/HowItWork";
import OurServices from "@/components/home/OurServices";
import Projects from "@/components/home/Projects";

import React from "react";

import CtaBox from "@/components/home/CtaBox";
import Review from "@/components/home/Review";
import Form from "@/components/home/Form";
import FAQ from "@/components/home/FAQ";
function HomePage(props) {
  return (
    <>
      <Hero />
      <About />
      <OurServices />
      <HowItWork />
      <Facts />
      <Projects />
      <CtaBox />
      <Review />
      <FAQ />

      <Form />
    </>
  );
}

export default HomePage;
