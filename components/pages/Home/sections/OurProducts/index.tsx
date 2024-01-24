import Container from "@/components/layouts/Container";
import React from "react";
import SectionHeading from "../../common/SectionHeading";
import ourProductsData from "@/data/pages/home/our_products.json";
import ProductCard from "../../common/ProductCard";

const { heading, content } = ourProductsData;

const OurProducts = () => {
  const prodAmount = 8;

  return (
    <Container className="mb-[142px]">
      <SectionHeading heading={heading.heading} content={heading.content} />
      <ul className="grid grid-cols-3 gap-x-2 gap-y-4 lg:grid-cols-4 lg:gap-x-[12px] xl:gap-x-[35px] lg:gap-y-[75px] xl:gap-y-[85px]">
        {content.products.slice(0, prodAmount).map((prod, idx) => {
          return (
            <li className="h-full" key={`our_products_${idx}`}>
              <ProductCard
                imgProps={{
                  width: 318,
                  height: 378,
                  tailwindGap: "gap-2 lg:gap-[28px] xl:gap-[36px]",
                  bgColor: prod.cardColor,
                }}
                product={prod}
              />
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default OurProducts;
