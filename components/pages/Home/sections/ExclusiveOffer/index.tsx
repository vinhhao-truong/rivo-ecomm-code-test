import Container from "@/components/layouts/Container";
import React from "react";
import exclusiveOfferData from "@/data/pages/home/exclusive_offer.json";
import ExOfferLeft from "./ExOfferLeft";
import ExOfferRight from "./ExOfferRight";
import DotPattern from "../../common/DotPattern";

const ExclusiveOffer = () => {
  return (
    <Container
      style={{
        backgroundColor: exclusiveOfferData.backgroundColor,
      }}
      className="h-[596px] rounded-[3px] flex justify-between lg:pl-[10px] xl:pl-[81px] lg:pr-[60px] xl:pr-[121px] relative mb-[167px]"
    >
      {/* slight green rect on bottom left side */}
      <div className="absolute w-[190px] h-[131px] bg-[#DFFBEA]/50 top-[404px] left-[98px]" />
      <DotPattern col={5} className="absolute bottom-[41px] left-[41px]" />
      <ExOfferLeft />
      <ExOfferRight />
    </Container>
  );
};

export default ExclusiveOffer;
