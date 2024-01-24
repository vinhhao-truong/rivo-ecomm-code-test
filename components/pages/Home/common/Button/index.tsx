import ReactProps from "@/interfaces/ReactProps";
import { getClassNames, getId, getStyles } from "@/utils/common/getAttribs";
import isColorLight from "@/utils/common/isColorLight";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { RiArrowRightDoubleFill as Arrow } from "react-icons/ri";
import useResponsive from "@/hooks/useResponsive";
import useResponsiveStyle from "@/hooks/useResponsiveStyle";

interface ButtonProps extends ReactProps {
  onClick?: () => React.MouseEventHandler<HTMLButtonElement>;
  color?: string;
  fontSize?: string;
  type: "Filled" | "Outlined";
  hoverIcon?: React.ReactNode;
  styleTablet?: React.CSSProperties;
  styleMobile?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  id,
  style = {},
  onClick,
  color = "#224F34",
  type,
  fontSize = "20px",
  hoverIcon = <Arrow />,
  styleMobile = {},
  styleTablet = {},
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const innerColor = isColorLight(color) ? "#000000" : "#FFFFFF"; //for inner text in contrast with bg
  const isFilled = type === "Filled";

  const outlinedStyle: React.CSSProperties = {
    border: `solid 2px ${color}`,
    color: color,
  };

  const filledStyle: React.CSSProperties = {
    backgroundColor: color,
    color: innerColor,
  };

  const typeStyle = isFilled ? filledStyle : outlinedStyle;

  const passedStyle = useResponsiveStyle({
    styleMobile,
    styleTablet,
    style,
  });

  const finalStyle: React.CSSProperties = {
    fontSize: fontSize,
    ...passedStyle,
    ...typeStyle,
  };

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...finalStyle,
      }}
      id={getId(id)}
      className={`${getClassNames(
        className
      )} rounded-[3px] flex justify-center items-center font-[500] relative`}
      onClick={onClick}
    >
      <div className="flex items-center justify-center gap-1">
        {children}
        <motion.div animate={{ fontSize: isHovered ? "22px" : 0 }} className="">
          {hoverIcon}
        </motion.div>
      </div>
    </button>
  );
};

export default Button;
