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
      <ul className="grid xs:grid-cols-2 md:grid-cols-3 mb-[40px] gap-x-2 gap-y-4 lg:gap-[25px] xl:gap-[43px]">
        {content.products.slice(0, numberOfProd).map((prod, idx) => {
          const isLastItem = idx === numberOfProd - 1;

          return (
            <li key={`best_selling_${idx}`}>
              <ProductCard
                imgProps={{
                  width: 430,
                  height: 566,
                  tailwindGap: "gap-3 lg:gap-[30px] xl:gap-[51px]",
                  bgColor: prod.cardColor,
                }}
                product={prod}
              />
            </li>
          );
        })}
      </ul>
      {/* SEE ALL BTN */}
      <Button
        type="Outlined"
        style={{
          width: "224px",
          height: "65px",
        }}
        styleTablet={{
          width: "160px",
          height: "48px",
          fontSize: "16px",
        }}
        styleMobile={{
          width: "160px",
          height: "48px",
          fontSize: "16px",
        }}
      >
        See all
      </Button>
    </Container>
  );
};

export default BestSelling;
