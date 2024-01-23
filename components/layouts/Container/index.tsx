import ReactProps from "@/interfaces/ReactProps";
import { getClassNames, getId, getStyles } from "@/utils/common/getAttribs";
import React from "react";

interface ContainerProps extends ReactProps {}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  id,
  style,
}) => {
  return (
    <div className="flex justify-center mx-2">
      <div
        className={`${getClassNames(className)} max-w-[1377px] w-full`}
        id={getId(id)}
        style={getStyles(style)}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
