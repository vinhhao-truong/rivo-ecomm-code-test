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
    <ul className={`${getClassNames(className)} flex gap-[35px]`}>
      {Object.keys(remaining).map((title, idx) => {
        return (
          <motion.li
            className="bg-white rounded-[3px] w-[100px] h-[100px] flex flex-col justify-center items-center"
            key={`ex_off_${title}`}
            animate={{
              scale: [1, 1.05, 1],
              transition: {
                duration: 3 - idx,
                repeat: Infinity,
              },
            }}
          >
            <p className="font-semibold text-[32px] leading-[48px]">
              {
                //@ts-ignore
                remaining[title]
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
    <div className="mt-[75px] text-system-green-2">
      <h2 className=" font-roboto-slab text-[46px] font-bold mb-5">
        {heading}
      </h2>
      <p className="mb-10">{content}</p>
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
      >
        {buttonContent}
      </Button>
    </div>
  );
};

export default ExOfferRight;
