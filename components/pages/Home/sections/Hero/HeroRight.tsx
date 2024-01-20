import React from "react";
import heroData from "@/data/pages/home/hero.json";
import ReactProps from "@/interfaces/ReactProps";
import { getClassNames } from "@/utils/common/getAttribs";
import Image from "next/image";

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
      )} w-[570px] h-[717px] rounded-tl-[141px] rounded-tr-[45px] rounded-br-[150px] rounded-bl-[82px]`}
    >
      {children}
    </div>
  );
};

const HeroRight = () => {
  return (
    <Card className="relative">
      <Image src={imageURL} alt="hero_right_img" fill />
    </Card>
  );
};

export default HeroRight;
