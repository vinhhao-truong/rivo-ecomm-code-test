import React from "react";
import heroData from "@/data/pages/home/hero.json";
import ReactProps from "@/interfaces/ReactProps";
import { getClassNames } from "@/utils/common/getAttribs";
import Image from "next/image";
import DotPattern from "../../common/DotPattern";

const { cardColor, imageURL } = heroData.right;

const Card: React.FC<ReactProps> = ({ children, className }) => {
  return (
    <div
      style={{
        backgroundColor: cardColor,
        boxShadow: "inset 6px 4px 26px hsla(0, 0%, 0%, 0.12)",
        width: `${(570 / 1117) * 100}%`,
      }}
      className={`${getClassNames(
        className
      )} relative h-[717px] rounded-tl-[126px] xl:rounded-tl-[141px] rounded-tr-[45px] rounded-br-[110px] xl:rounded-br-[150px] rounded-bl-[82px]`}
    >
      <DotPattern className="absolute top-[155px] right-[12px]" />
      {children}
      <DotPattern className="absolute top-[524px] left-[24px]" />
    </div>
  );
};

const HeroRight = () => {
  return (
    <Card className="">
      <Image
        src={imageURL}
        alt="hero_right_img"
        fill
        style={{
          objectFit: "contain",
          objectPosition: "bottom",
          zIndex: 1,
        }}
        sizes=""
      />
    </Card>
  );
};

export default HeroRight;
