import React from "react";
import { HiMenu as MenuIcon } from "react-icons/hi";

const MobileMenuButton = () => {
  return (
    <button className="block lg:hidden">
      <MenuIcon className="text-[40px]" />
    </button>
  );
};

export default MobileMenuButton;
