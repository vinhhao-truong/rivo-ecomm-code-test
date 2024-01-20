import Container from "@/components/layouts/Container";
import React from "react";
import SectionHeading from "../../common/SectionHeading";
import bestSellingData from "@/data/pages/home/best_selling.json";
import ImageCard from "../../common/ImageCard";

const { heading, content } = bestSellingData;

const BestSelling = () => {
  return (
    <Container>
      <SectionHeading heading={heading.heading} content={heading.content} />
      <ul className="flex items-center justify-between">
        {content.products.slice(0, 3).map((prod, idx) => {
          return (
            <li key={`best_selling_${idx}`}>
              <ImageCard
                width={430}
                height={566}
                imageURL={prod.imgURL}
                title={prod.name}
                backgroundColor={prod.cardColor}
              />
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default BestSelling;
