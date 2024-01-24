import ReactProps from "@/interfaces/ReactProps";
import { getClassNames } from "@/utils/common/getAttribs";
import React from "react";
import { v4 as uuidv4 } from "uuid";

interface DotPatternProps extends ReactProps {
  color?: string;
  dotRadius?: string;
  col?: number;
  row?: number;
  xGap?: string;
  yGap?: string;
}

const DotPattern: React.FC<DotPatternProps> = ({
  color = "#267144",
  dotRadius = "4",
  col = 4,
  row = 4,
  xGap = "37",
  yGap = "34",
  className,
}) => {
  const dotCount = col * row;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${37 * col - 29}`} // give exact width and height wrap all the dots
      height={`${34 * row - 26}`} // give exact width and height wrap all the dots
      fill="none"
      className={`${getClassNames(className)}`}
    >
      {Array(dotCount)
        .fill("")
        .map((_, idx) => {
          const currentXCount = Math.floor(idx / row);

          // gap on x-axis
          const cx = (
            parseInt(dotRadius) +
            currentXCount * parseInt(xGap)
          ).toString();

          const currentYCount = idx % row;

          // gap on y-axis
          const cy = (
            parseInt(dotRadius) +
            currentYCount * parseInt(yGap)
          ).toString();

          return (
            <circle cx={cx} cy={cy} r={dotRadius} fill={color} key={uuidv4()} />
          );
        })}
    </svg>
  );
};

export default DotPattern;
