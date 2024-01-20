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
      }}
      className={`${getClassNames(
        className
      )} relative w-[570px] h-[717px] rounded-tl-[141px] rounded-tr-[45px] rounded-br-[150px] rounded-bl-[82px]`}
    >
      <DotPattern className="absolute top-0 right-0" row={7} col={2} />
      {children}
    </div>
  );
};

const HeroRight = () => {
  return (
    <Card className="">
      <Image src={imageURL} alt="hero_right_img" fill />
    </Card>
  );
};

export default HeroRight;
