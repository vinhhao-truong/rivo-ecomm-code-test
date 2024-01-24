import React, { useEffect, useState } from "react";
import exclusiveOfferData from "@/data/pages/home/exclusive_offer.json";
import ReactProps from "@/interfaces/ReactProps";
import moment from "moment";
import { getClassNames } from "@/utils/common/getAttribs";
import Button from "../../../common/Button";
import { motion } from "framer-motion";

const {
  heading,
  content,
  endTime,
  button: buttonContent,
} = exclusiveOfferData.right;

const CountDown: React.FC<ReactProps> = ({ className }) => {
  type Remaining = {
    Days: number;
    Hours: number;
    Min: number;
  };

  const initialRemaining: Remaining = {
    Days: 0,
    Hours: 0,
    Min: 0,
  };

  const [remaining, setRemaining] = useState<Remaining>(initialRemaining);

  useEffect(() => {
    const tick = setInterval(() => {
      const now = moment();
      const endTimeMoment = moment(endTime);

      const days = endTimeMoment.diff(now, "days");
      const hours = endTimeMoment.diff(now, "hours") - 24 * days;
      const mins =
        endTimeMoment.diff(now, "minutes") - days * 24 * 60 - hours * 60; // normally 1 min lesser because seconds still ticking

      setRemaining({
        Days: days,
        Hours: hours,
        Min: mins,
      });
    }, 1000);

    return () => clearInterval(tick);
  }, []);

  return (
    <ul
      className={`${getClassNames(
        className
      )} flex min-[480px]:justify-end lg:justify-start gap-[10px] xs:gap-[20px] lg:gap-[35px] z-[2]`}
    >
      {Object.keys(remaining).map((title, idx) => {
        return (
          <motion.li
            className="bg-white rounded-[3px] w-[67px] xs:w-[75px] md:w-[100px] h-[67px] xs:h-[75px] md:h-[100px] flex flex-col justify-center items-center"
            key={`ex_off_${title}`}
            animate={{
              scale: [1, 1.05, 1],
              transition: {
                duration: 3 - idx,
                repeat: Infinity,
              },
            }}
          >
            <p className="font-semibold text-[28px] xs:text-[32px] xs:leading-[48px]">
              {
                //@ts-ignore
                remaining[title] > 10 //@ts-ignore
                  ? remaining[title] //@ts-ignore
                  : `0${remaining[title]}`
              }
            </p>
            <p className="leading-[24px] text-[16px]">{title}</p>
          </motion.li>
        );
      })}
    </ul>
  );
};

const ExOfferRight = () => {
  return (
    <div className="flex flex-col min-[480px]:items-end lg:items-start lg:relative absolute min-[480px]:mt-[50px] lg:mt-[75px] p-4 lg:p-0 text-system-green-2">
      <h2 className=" font-roboto-slab text-[46px] font-bold mb-5">
        {heading}
      </h2>
      <p className=" min-[480px]:text-end mb-10 lg:text-start">{content}</p>
      <CountDown className="mb-[41px]" />
      <Button
        type="Filled"
        style={{
          width: "235px",
          height: "74px",
        }}
        styleTablet={{
          width: "200px",
          height: "60px",
          fontSize: "16px",
        }}
        styleMobile={{
          width: "200px",
          height: "60px",
          fontSize: "16px",
        }}
        className="z-[2]"
      >
        {buttonContent}
      </Button>
    </div>
  );
};

export default ExOfferRight;
