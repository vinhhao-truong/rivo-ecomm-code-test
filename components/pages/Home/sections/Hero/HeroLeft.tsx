import React from "react";
import heroData from "@/data/pages/home/hero.json";
import Button from "../../common/Button";

const { heading, content, button: buttonContent } = heroData.left;

const HeroLeft = () => {
  return (
    <div className="w-[649px] mt-[22px]">
      <h1 className="font-rufina font-bold text-[86px] leading-[106.21px] text-system-green-2 mb-[27px]">
        {heading}
      </h1>
      <p className="text-[#267D49] text-[24px] font-medium leading-[52.8px] mb-[54px]">
        {content}
      </p>
      <Button type="Filled" width="258px" height="74px">
        {buttonContent}
      </Button>
    </div>
  );
};

export default HeroLeft;
