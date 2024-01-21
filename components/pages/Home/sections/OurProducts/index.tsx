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
      <ul className="grid grid-cols-4 gap-[35px]">
        {content.products.slice(0, prodAmount).map((prod, idx) => {
          return (
            <li className="h-full" key={`our_products_${idx}`}>
              <ProductCard
                imgProps={{
                  width: 318,
                  height: 378,
                  gapWithInfo: "36px",
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
