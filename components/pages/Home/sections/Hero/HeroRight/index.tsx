import React from "react";
import ReactProps from "@/interfaces/ReactProps";
import { getClassNames } from "@/utils/common/getAttribs";
import Image from "next/image";
import DotPattern from "../../../common/DotPattern";
import useResponsive from "@/hooks/useResponsive";
import { useMediaQuery } from "@mui/material";

const Card: React.FC<ReactProps & { cardColor: string }> = ({
  children,
  className,
  cardColor,
}) => {
  const screenSize = useResponsive();
  const isDesktop = screenSize === "desktop";
  const isMobileAbove = useMediaQuery("(min-width:350px)");

  return (
    <div
      style={{
        backgroundColor: cardColor,
        boxShadow: "inset 6px 4px 26px hsla(0, 0%, 0%, 0.12)",
        maxWidth: isDesktop ? `${(570 / 1377) * 100}%` : undefined,
      }}
      className={`${getClassNames(
        className
      )} relative lg:w-[570px] w-full h-[717px] rounded-tl-[126px] xl:rounded-tl-[141px] rounded-tr-[45px] rounded-br-[110px] xl:rounded-br-[150px] rounded-bl-[82px]`}
    >
      {isMobileAbove && (
        <DotPattern className="absolute top-[155px] right-[12px]" />
      )}
      {children}
      {isMobileAbove && (
        <DotPattern className="absolute top-[524px] left-[24px]" />
      )}
    </div>
  );
};

interface HeroRightProps extends ReactProps {
  cardColor: string;
  imageURL: string;
}

const HeroRight: React.FC<HeroRightProps> = ({ cardColor, imageURL }) => {
  const screenSize = useResponsive();
  const isDesktop = screenSize === "desktop";
  const isMobile = screenSize === "mobile";
  const isTablet = screenSize === "tablet";
  const isMobileBelow = useMediaQuery("(max-width:350px)");

  return (
    <Card cardColor={cardColor} className="relative overflow-hidden">
      <Image
        src={imageURL}
        alt="hero_right_img"
        fill={isDesktop}
        style={{
          objectFit: "contain",
          objectPosition: isDesktop ? "bottom" : "bottom right",
          zIndex: 1,
        }}
        sizes=""
        priority
        width={
          isMobileBelow ? 200 : isMobile ? 350 : isTablet ? 400 : undefined
        }
        height={
          isMobileBelow ? 200 : isMobile ? 350 : isTablet ? 400 : undefined
        }
        className="absolute bottom-0 -right-[40px] xs:-right-[100px] sm:right-0"
      />
    </Card>
  );
};

export default HeroRight;
