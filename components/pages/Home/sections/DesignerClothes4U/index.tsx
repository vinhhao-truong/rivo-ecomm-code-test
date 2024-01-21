import Container from "@/components/layouts/Container";
import React from "react";
import SectionHeading from "../../common/SectionHeading";
import dcfyContent from "@/data/pages/home/designer_clothes_for_you.json";
import ImageCard from "../../common/ImageCard";

const { heading, content } = dcfyContent;

const DesignerClothes4U = () => {
  const designCount = 3;

  return (
    <Container className="mb-[544px]">
      <SectionHeading heading={heading.heading} content={heading.content} />
      <ul className="grid grid-cols-3 gap-[44px]">
        {content.designs
          .slice(0, designCount)
          .map(({ product, description, imageURL, backgroundColor }, idx) => {
            return (
              <li key={`dcfy-${idx}`} className="text-center text-[#373737]">
                <ImageCard
                  imageURL={imageURL}
                  backgroundColor={backgroundColor}
                  width={430}
                  height={566}
                  className="mb-[25px]"
                />
                <h3 className="font-semibold text-[30px]">{product}</h3>
                <p className="">{description}</p>
              </li>
            );
          })}
      </ul>
    </Container>
  );
};

export default DesignerClothes4U;
