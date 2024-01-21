import StarLogo from "@/components/svg/StarLogo";
import ReactProps from "@/interfaces/ReactProps";
import formatRoundedNum from "@/utils/common/formatRoundedNum";
import React from "react";

interface ProductInfoProps extends ReactProps {
  name: string;
  price: number;
  rating: number;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ name, price, rating }) => {
  const formattedPrice = formatRoundedNum(price, 2);
  const formattedRating = formatRoundedNum(rating);

  return (
    <div className="flex flex-col items-center lg:text-[20px] xl:text-[22px]">
      <h3 className="font-semibold text-[#373737] lg:mb-1 xl:mb-2 truncate">
        {name}
      </h3>
      <div className="flex basis-0 items-center justify-center text-[#454545] lg:gap-[25px] xl:gap-[43px] w-full leading-[39px]">
        <p>${formattedPrice}</p>
        <div className="w-[1px] h-[27px] bg-black"></div>
        <div className="flex items-center lg:gap-[6px] xl:gap-[9px]">
          {formattedRating} <StarLogo />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
