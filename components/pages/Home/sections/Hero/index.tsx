import Container from "@/components/layouts/Container";
import React from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <div className="h-[1117px] bg-system-green-1 pt-[234px]">
      <Container className="flex justify-between">
        <HeroLeft />
        <HeroRight />
      </Container>
    </div>
  );
};

export default Hero;
