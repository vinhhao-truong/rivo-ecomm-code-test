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
      <ul className="grid xs:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4 lg:gap-[24px] xl:gap-[44px]">
        {content.designs
          .slice(0, designCount)
          .map(({ product, description, imageURL, backgroundColor }, idx) => {
            return (
              <li
                key={`dcfy-${idx}`}
                className="text-center text-[#373737] flex flex-col items-center"
              >
                {/* DESIGN IMAGES */}
                <ImageCard
                  imageURL={imageURL}
                  backgroundColor={backgroundColor}
                  width={430}
                  height={566}
                  className="mb-5 lg:mb-[25px]"
                />
                {/* DESIGN DESCRIPTION */}
                <h3 className="font-semibold text-[28px] lg:text-[30px]">
                  {product}
                </h3>
                <p className="">{description}</p>
              </li>
            );
          })}
      </ul>
    </Container>
  );
};

export default DesignerClothes4U;
