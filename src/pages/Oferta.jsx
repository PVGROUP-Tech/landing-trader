import { useEffect } from "react";

import { trackViewContent } from "../lib/pixel";

import HeroOferta from "../components/HeroOferta";
import Benefits from "../components/Benefits";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";

export default function Oferta() {

  useEffect(() => {
    trackViewContent();
  }, []);

  return (
    <>
      <HeroOferta />
      <Benefits />
      <HowItWorks />
      {/* <Testimonials /> */}
      <Pricing />
      <FAQ />
    </>
  );
}