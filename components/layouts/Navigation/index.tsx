import React, { useState } from "react";
import Container from "../Container";
import NextLink from "next/link";
import RivoLogo from "@/components/svg/RivoLogo";
import navigationList from "@/data/navigation_list.json";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import LoginButton from "./LoginButton";
import CartButton from "./CartButton";
import MobileMenuButton from "./MobileMenuButton";

const Navigation = () => {
  const { scrollY } = useScroll();

  const [isScrollDown, setIsScrollDown] = useState<boolean>(false);
  const [position, setPosition] = useState<number>(0);
  const [hoveredNavIdx, setHoverNavIdx] = useState<number | null>(null);

  const isUnderDefaultPos = position > 135;
  const isUnderHero = position > 1165;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setPosition((prev) => {
      if (latest > prev) {
        setIsScrollDown(true);
      } else {
        setIsScrollDown(false);
      }

      return latest;
    });
  });

  const MotionLink = motion(NextLink);

  return (
    <>
      {/* BLANK SPACE ON TOP OF NAV */}
      <div className="md:h-[50px] bg-system-green-1"></div>
      <motion.div
        animate={{
          y: isScrollDown && isUnderDefaultPos ? "-100%" : 0,
          transition: {
            ease: "easeIn",
            duration: 0.2,
            delay: 0.1,
          },
        }}
        className="sticky top-0 bg-system-green-1 z-[100]"
        style={{
          background: isUnderHero ? "white" : undefined,
        }}
      >
        <Container className="flex items-center justify-between py-2 text-system-green-2">
          {/* LOGO */}
          <NextLink href="/">
            <RivoLogo />
          </NextLink>
          {/* NAV (use absolute and make it absolutely center, not rely on flex) */}
          <nav className="absolute hidden lg:flex items-center lg:gap-[35px] xl:gap-[52px] justify-between -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            {navigationList.map(({ href, title }, idx) => {
              const isHovered = idx === hoveredNavIdx;

              return (
                <div
                  onMouseEnter={() => setHoverNavIdx(idx)}
                  onMouseLeave={() => setHoverNavIdx(null)}
                  key={`nav-${idx}`}
                  className="relative overflow-hidden list-none"
                >
                  <MotionLink className="" href={href}>
                    {title}
                  </MotionLink>
                  {/* nav link underline */}
                  <motion.div
                    animate={{
                      x: isHovered ? "-20%" : "-110%",
                      transition: { ease: "easeIn", duration: 0.2 },
                    }}
                    className="absolute h-[2px] bottom-0 w-full bg-system-green-2 rounded-lg"
                  ></motion.div>
                </div>
              );
            })}
          </nav>
          {/* CART AND LOGIN */}
          <div className="flex items-center gap-[10px] min-[400px]:gap-[20px] md:gap-[30px] xl:gap-[57px]">
            <CartButton />
            <LoginButton />
            <MobileMenuButton />
          </div>
        </Container>
      </motion.div>
    </>
  );
};

export default Navigation;
