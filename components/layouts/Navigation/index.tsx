import React, { useState } from "react";
import Container from "../Container";
import NextLink from "next/link";
import Button from "@/components/pages/Home/common/Button";
import RivoLogo from "@/components/svg/RivoLogo";
import ShoppingCartAdd from "@/components/svg/ShoppingCartAdd";
import navigationList from "@/data/navigation_list.json";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

const Navigation = () => {
  const { scrollY } = useScroll();
  const [isScrollDown, setIsScrollDown] = useState<boolean>(false);
  const [position, setPosition] = useState<number>(0);

  const isUnderDefaultPos = position > 135;
  const isUnderHero = position > 1165;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setPosition((prev) => {
      setTimeout(() => {
        if (latest > prev) {
          setIsScrollDown(true);
        } else {
          setIsScrollDown(false);
        }
      }, 150);

      return latest;
    });
  });

  return (
    <>
      {/* BLANK SPACE ON TOP OF NAV */}
      <div className="h-[50px] bg-system-green-1"></div>
      <motion.div
        animate={{
          y: isScrollDown && isUnderDefaultPos ? -80 : 0,
          transition: {
            ease: "easeOut",
            duration: 0.2,
          },
          background: isUnderHero ? "white" : undefined,
          backdropFilter: isUnderDefaultPos ? "blur(10px)" : undefined,
        }}
        className="sticky top-0 bg-system-green-1 z-[100]"
      >
        <Container className="py-2 flex items-center justify-between text-system-green-2">
          {/* LOGO */}
          <NextLink href="/">
            <RivoLogo />
          </NextLink>
          {/* NAV (use absolute and make it absolutely center, not rely on flex) */}
          <nav className="absolute flex items-center gap-[52px] justify-between -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            {navigationList.map(({ href, title }, idx) => (
              <NextLink className="" key={`nav-${idx}`} href={href}>
                {title}
              </NextLink>
            ))}
          </nav>
          {/* CART AND LOGIN */}
          <div className="flex items-center gap-[57px]">
            <button>
              <ShoppingCartAdd />
            </button>
            <Button width="142px" height="52px" type="Outlined">
              LOGIN
            </Button>
          </div>
        </Container>
      </motion.div>
    </>
  );
};

export default Navigation;
