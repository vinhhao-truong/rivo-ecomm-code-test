import ReactProps from "@/interfaces/ReactProps";
import Image from "next/image";
import React from "react";

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
}) => {
  return (
    <Image
      style={{
        backgroundColor: backgroundColor,
        borderRadius: "3px",
      }}
      src={imageURL}
      alt={`alt: ${title}`}
      width={width}
      height={height}
    />
  );
};

export default ImageCard;
