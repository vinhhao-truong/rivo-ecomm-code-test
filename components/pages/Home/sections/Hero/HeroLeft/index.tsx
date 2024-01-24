import React from "react";
import Button from "../../../common/Button";
import ReactProps from "@/interfaces/ReactProps";
import useResponsive from "@/hooks/useResponsive";

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
  const screenSize = useResponsive();
  const isDesktop = screenSize === "desktop";

  return (
    <div
      style={{
        width: isDesktop ? `${(649 / 1377) * 100}%` : undefined,
      }}
      className="top-[60px] left-[40px] absolute lg:relative lg:mt-[22px] z-[1]"
    >
      <h1 className="font-rufina font-bold text-[48px] lg:text-[74px] xl:text-[86px] lg:leading-[95px] xl:leading-[106.21px] text-system-green-2 mb-[27px]">
        {heading}
      </h1>
      <p className="text-[#267D49] lg:text-[24px] lg:leading-[45px] xl:leading-[52.8px] mb-[54px] md:w-2/3 lg:w-[565px]">
        {content}
      </p>
      <Button
        type="Filled"
        style={{
          width: "258px",
          height: "74px",
        }}
        styleTablet={{
          width: "160px",
          height: "50px",
          fontSize: "16px",
        }}
        styleMobile={{
          width: "160px",
          height: "50px",
          fontSize: "16px",
        }}
      >
        {buttonContent}
      </Button>
    </div>
  );
};

export default HeroLeft;
