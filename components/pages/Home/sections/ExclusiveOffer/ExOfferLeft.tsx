import React from "react";
import exclusiveOfferData from "@/data/pages/home/exclusive_offer.json";
import Image from "next/image";

const { imageURL } = exclusiveOfferData.left;

const ExOfferLeft = () => {
  return (
    <Image
      src={imageURL}
      alt="exclusive_offer_image"
      width={482}
      height={596}
      className="z-[1]"
    />
  );
};

export default ExOfferLeft;
