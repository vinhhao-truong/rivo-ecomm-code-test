import React from "react";
import exclusiveOfferData from "@/data/pages/home/exclusive_offer.json";
import Image from "next/image";
import useResponsive from "@/hooks/useResponsive";
import { useMediaQuery } from "@mui/material";

const { imageURL } = exclusiveOfferData.left;

const ExOfferLeft = () => {
  const screenSize = useResponsive();
  const isDesktop = screenSize === "desktop";
  const isTablet = screenSize === "tablet";
  const isMobile = screenSize === "mobile";
  const showImage = useMediaQuery("(min-width: 480px)");

  return showImage ? (
    <Image
      src={imageURL}
      alt="exclusive_offer_image"
      width={isDesktop ? 482 : isTablet ? 350 : isMobile ? 250 : 250}
      height={isDesktop ? 596 : 550}
      className="z-[1] object-contain object-bottom"
    />
  ) : (
    <></>
  );
};

export default ExOfferLeft;
