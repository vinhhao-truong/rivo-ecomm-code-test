import Container from "@/components/layouts/Container";
import React from "react";
import SectionHeading from "../../common/SectionHeading";
import bestSellingData from "@/data/pages/home/best_selling.json";
import ImageCard from "../../common/ImageCard";
import ProductCard from "../../common/ProductCard";
import Button from "../../common/Button";

const { heading, content } = bestSellingData;

const BestSelling = () => {
  const numberOfProd = 3;

  return (
    <Container className="flex flex-col items-center mb-[78px]">
      <SectionHeading heading={heading.heading} content={heading.content} />
      {/* PRODUCTS */}
      <ul className="grid grid-cols-3 mb-[40px] lg:gap-[25px] xl:gap-[43px]">
        {content.products.slice(0, numberOfProd).map((prod, idx) => {
          return (
            <li key={`best_selling_${idx}`}>
              <ProductCard
                imgProps={{
                  width: 430,
                  height: 566,
                  tailwindGap: "lg:gap-[30px] xl:gap-[51px]",
                  bgColor: prod.cardColor,
                }}
                product={prod}
              />
            </li>
          );
        })}
      </ul>
      {/* SEE ALL BTN */}
      <Button type="Outlined" width="224px" height="65px">
        See all
      </Button>
    </Container>
  );
};

export default BestSelling;
