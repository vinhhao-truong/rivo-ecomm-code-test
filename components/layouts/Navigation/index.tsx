import React from "react";
import Container from "../Container";
import NextLink from "next/link";
import Button from "@/components/pages/Home/common/Button";
import RivoLogo from "@/components/svg/RivoLogo";
import ShoppingCartAdd from "@/components/svg/ShoppingCartAdd";
import navigationList from "@/data/navigation_list.json";

const Navigation = () => {
  return (
    <Container className="mt-[50px] py-2 absolute top-0 flex items-center justify-between text-system-green-2">
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
  );
};

export default Navigation;
