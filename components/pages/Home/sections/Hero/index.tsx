import Container from "@/components/layouts/Container";
import React from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import ReactProps from "@/interfaces/ReactProps";
import { getClassNames } from "@/utils/common/getAttribs";

const Hero: React.FC<ReactProps> = ({ className }) => {
  return (
    <section
      className={`${getClassNames(
        className
      )} h-[1117px] bg-system-green-1 pt-[124px]`}
    >
      <Container className="flex justify-between">
        <HeroLeft />
        <HeroRight />
      </Container>
    </section>
  );
};

export default Hero;
