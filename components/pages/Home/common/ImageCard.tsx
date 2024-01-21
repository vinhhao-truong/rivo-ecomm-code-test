import ReactProps from "@/interfaces/ReactProps";
import { getClassNames } from "@/utils/common/getAttribs";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface ImageCardProps extends ReactProps {
  backgroundColor?: string;
  imageURL: string;
  width: number;
  height: number;
  title?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  backgroundColor = "#C2EFD4",
  imageURL,
  width,
  height,
  title = "image card",
  className,
}) => {
  const MotionImage = motion(Image);

  return (
    <MotionImage
      whileHover={{
        scale: 1.05,
      }}
      style={{
        backgroundColor: backgroundColor,
        borderRadius: "3px",
      }}
      src={imageURL}
      alt={`alt: ${title}`}
      width={width}
      height={height}
      className={`${getClassNames(className)}`}
    />
  );
};

export default ImageCard;
