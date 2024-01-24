import Product from "@/interfaces/Product";
import ReactProps from "@/interfaces/ReactProps";
import React from "react";
import ImageCard from "../ImageCard";
import ProductInfo from "../ProductInfo";

interface ProductCardProps extends ReactProps {
  product: Product;
  imgProps: {
    width: number;
    height: number;
    tailwindGap: string;
    bgColor: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product, imgProps }) => {
  return (
    <div
      className={`lg:h-full flex-col flex items-center cursor-pointer ${imgProps.tailwindGap}`}
    >
      <ImageCard
        imageURL={product.imgURL}
        width={imgProps.width}
        height={imgProps.height}
        backgroundColor={imgProps.bgColor}
        className="row-span-3"
      />
      <ProductInfo
        name={product.name}
        price={product.price}
        rating={product.rating}
        className="row-span-1"
      />
    </div>
  );
};

export default ProductCard;
