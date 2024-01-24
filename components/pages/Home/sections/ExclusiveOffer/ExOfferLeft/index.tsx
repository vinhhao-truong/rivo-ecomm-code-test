import React from "react";
import exclusiveOfferData from "@/data/pages/home/exclusive_offer.json";
import Image from "next/image";
import useResponsive from "@/hooks/useResponsive";

const { imageURL } = exclusiveOfferData.left;

const ExOfferLeft = () => {
  const screenSize = useResponsive();
  const isDesktop = screenSize === "desktop";

  return (
    <Image
      src={imageURL}
      alt="exclusive_offer_image"
      width={isDesktop ? 482 : 350}
      height={isDesktop ? 596 : 550}
      className="z-[1] object-contain object-bottom"
    />
  );
};

export default ExOfferLeft;
