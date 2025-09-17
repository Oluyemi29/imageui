"use client";
import React from "react";
import HeroSection from "./HeroSection";
import GenerateSection from "./GenerateSection";

const LandingPage = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <GenerateSection />
    </div>
  );
};

export default LandingPage;
