import Container from "@/components/layouts/Container";
import React from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import ReactProps from "@/interfaces/ReactProps";
import { getClassNames } from "@/utils/common/getAttribs";
import heroData from "@/data/pages/home/hero.json";

const Hero: React.FC<ReactProps> = ({ className }) => {
  return (
    <section
      className={`${getClassNames(
        className
      )} h-[1007px] bg-system-green-1 pt-[124px]`}
    >
      <Container className="flex justify-between flex-none gap-2">
        <HeroLeft {...heroData.left} />
        <HeroRight {...heroData.right} />
      </Container>
    </section>
  );
};

export default Hero;
