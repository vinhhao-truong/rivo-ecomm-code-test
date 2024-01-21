import Product from "@/interfaces/Product";
import ReactProps from "@/interfaces/ReactProps";
import React from "react";
import ImageCard from "./ImageCard";
import ProductInfo from "./ProductInfo";

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
    <div className={`flex-col flex items-center ${imgProps.tailwindGap}`}>
      <ImageCard
        imageURL={product.imgURL}
        width={imgProps.width}
        height={imgProps.height}
        backgroundColor={imgProps.bgColor}
      />
      <ProductInfo
        name={product.name}
        price={product.price}
        rating={product.rating}
      />
    </div>
  );
};

export default ProductCard;
