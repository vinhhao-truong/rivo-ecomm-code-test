import ReactProps from "@/interfaces/ReactProps";
import { getClassNames, getId, getStyles } from "@/utils/common/getAttribs";
import isColorLight from "@/utils/common/isColorLight";
import React from "react";

interface ButtonProps extends ReactProps {
  onClick?: () => React.MouseEventHandler<HTMLButtonElement>;
  color?: string;
  fontSize?: string;
  type: "Filled" | "Outlined";
  width: string;
  height: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  id,
  style,
  onClick,
  color = "#224F34",
  type,
  width,
  height,
  fontSize = "20px",
}) => {
  const innerColor = isColorLight(color) ? "#000000" : "#FFFFFF"; //for inner text in contrast with bg

  const outlinedStyle: React.CSSProperties = {
    border: `solid 2px ${color}`,
    color: color,
  };

  const filledStyle: React.CSSProperties = {
    backgroundColor: color,
    color: innerColor,
  };

  const typeStyle = type === "Filled" ? filledStyle : outlinedStyle;

  return (
    <button
      style={{
        width: width,
        height: height,
        fontSize: fontSize,
        ...typeStyle,
        ...getStyles(style),
      }}
      id={getId(id)}
      className={`${getClassNames(
        className
      )} rounded-[3px] flex justify-center items-center font-[500]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
