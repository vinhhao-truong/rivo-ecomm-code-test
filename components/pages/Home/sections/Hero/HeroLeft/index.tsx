import React from "react";
import Button from "../../../common/Button";
import ReactProps from "@/interfaces/ReactProps";

interface HeroLeftProps extends ReactProps {
  heading: string;
  content: string;
  button: string;
}

const HeroLeft: React.FC<HeroLeftProps> = ({
  heading,
  content,
  button: buttonContent,
}) => {
  return (
    <div
      style={{
        width: `${(649 / 1117) * 100}%`,
      }}
      className="mt-[22px]"
    >
      <h1 className="font-rufina font-bold lg:text-[74px] xl:text-[86px] lg:leading-[95px] xl:leading-[106.21px] text-system-green-2 mb-[27px]">
        {heading}
      </h1>
      <p className="text-[#267D49] text-[24px] lg:leading-[45px] xl:leading-[52.8px] mb-[54px] w-[565px]">
        {content}
      </p>
      <Button type="Filled" width="258px" height="74px">
        {buttonContent}
      </Button>
    </div>
  );
};

export default HeroLeft;