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
    <div
      style={{
        height: height,
        width: width,
        backgroundColor: backgroundColor,
        borderRadius: "3px",
      }}
      className="relative"
    >
      <Image
        style={{
          objectPosition: "bottom",
        }}
        src={imageURL}
        alt={`alt: ${title}`}
        width={width}
        height={height}
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
      />
    </div>
  );
};

export default ImageCard;
