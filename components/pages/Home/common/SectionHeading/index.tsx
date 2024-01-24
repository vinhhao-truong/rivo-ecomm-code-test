import Heading from "@/interfaces/Heading";
import ReactProps from "@/interfaces/ReactProps";
import React from "react";

interface SectionHeadingProps extends ReactProps, Heading {}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  heading,
  content,
}) => {
  return (
    <div className="text-center mb-10 lg:mb-[77px] text-system-green-2">
      <h2 className="text-[48px] lg:text-[64px] mb-2 lg:mb-[21px] font-roboto-slab">
        {heading}
      </h2>
      <h3 className="">{content}</h3>
    </div>
  );
};

export default SectionHeading;
