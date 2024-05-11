import React from "react";
import Hero from "@/components/home/Hero";
import Information from "@/components/home/Information";
import Blog from "@/components/home/Blog";
import Part from "@/components/home/Part";
import FAQ from "@/components/home/FAQ";
import Travel from "@/components/home/Travel";

function Home() {
  return (
    <>
      <Hero />
      <Information />
      <Blog />
      <Part />
      <FAQ />
      <Travel title="Inspiration for your next travel" />
    </>
  );
}

export default Home;
