import React, { useState } from "react";
import { motion } from "framer-motion";

const ShoppingCartAdd = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <svg
      onMouseEnter={() => setIsHovered(true)} // update hover state
      onMouseLeave={() => setIsHovered(false)} // update hover state
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_207_1284)">
        <path
          d="M26.25 7.5H22.5C22.5 5.51088 21.7098 3.60322 20.3033 2.1967C18.8968 0.790176 16.9891 0 15 0C13.0109 0 11.1032 0.790176 9.6967 2.1967C8.29018 3.60322 7.5 5.51088 7.5 7.5H3.75C2.75544 7.5 1.80161 7.89509 1.09835 8.59835C0.395088 9.30161 0 10.2554 0 11.25L0 23.75C0.00198482 25.407 0.661102 26.9956 1.83277 28.1672C3.00445 29.3389 4.59301 29.998 6.25 30H17.5C17.8315 30 18.1495 29.8683 18.3839 29.6339C18.6183 29.3995 18.75 29.0815 18.75 28.75C18.75 28.4185 18.6183 28.1005 18.3839 27.8661C18.1495 27.6317 17.8315 27.5 17.5 27.5H6.25C5.25544 27.5 4.30161 27.1049 3.59835 26.4017C2.89509 25.6984 2.5 24.7446 2.5 23.75V11.25C2.5 10.9185 2.6317 10.6005 2.86612 10.3661C3.10054 10.1317 3.41848 10 3.75 10H7.5V12.5C7.5 12.8315 7.6317 13.1495 7.86612 13.3839C8.10054 13.6183 8.41848 13.75 8.75 13.75C9.08152 13.75 9.39946 13.6183 9.63388 13.3839C9.8683 13.1495 10 12.8315 10 12.5V10H20V12.5C20 12.8315 20.1317 13.1495 20.3661 13.3839C20.6005 13.6183 20.9185 13.75 21.25 13.75C21.5815 13.75 21.8995 13.6183 22.1339 13.3839C22.3683 13.1495 22.5 12.8315 22.5 12.5V10H26.25C26.5815 10 26.8995 10.1317 27.1339 10.3661C27.3683 10.6005 27.5 10.9185 27.5 11.25V17.5C27.5 17.8315 27.6317 18.1495 27.8661 18.3839C28.1005 18.6183 28.4185 18.75 28.75 18.75C29.0815 18.75 29.3995 18.6183 29.6339 18.3839C29.8683 18.1495 30 17.8315 30 17.5V11.25C30 10.2554 29.6049 9.30161 28.9017 8.59835C28.1984 7.89509 27.2446 7.5 26.25 7.5ZM10 7.5C10 6.17392 10.5268 4.90215 11.4645 3.96447C12.4021 3.02678 13.6739 2.5 15 2.5C16.3261 2.5 17.5979 3.02678 18.5355 3.96447C19.4732 4.90215 20 6.17392 20 7.5H10Z"
          fill="#224F34"
        />
      </g>
      <g filter="url(#filter0_d_207_1284)">
        <motion.circle
          animate={{ fill: isHovered ? "#224F34" : "#10FF70" }} // the dot colour changes
          cx="27"
          cy="27"
          r="5"
          fill="#10FF70"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_207_1284"
          x="14"
          y="15"
          width="28"
          height="28"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="2" />
          <feGaussianBlur stdDeviation="4.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_207_1284"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_207_1284"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_207_1284">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ShoppingCartAdd;
