import ReactProps from "@/interfaces/ReactProps";
import { Drawer } from "@mui/material";
import React, { useState } from "react";
import { HiMenu as MenuIcon } from "react-icons/hi";
import navigationList from "@/data/navigation_list.json";
import Link from "next/link";
import RivoLogo from "@/components/svg/RivoLogo";
import { IoClose as CloseIcon } from "react-icons/io5";

interface MobileMenuProps extends ReactProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <div className="relative flex flex-col items-end justify-center w-screen h-screen gap-12 p-12">
        {/* CLOSE BTN */}
        <button
          onClick={onClose}
          className="absolute text-xl text-gray-500 top-4 left-4"
        >
          <CloseIcon />
        </button>
        {/* LOGO */}
        <Link onClick={onClose} href="/">
          <RivoLogo />
        </Link>
        {/* MENU LIST */}
        <div className="flex flex-col items-end gap-2 text-[30px] text-system-green-2">
          {navigationList.map(({ href, title }, idx) => {
            return (
              <Link onClick={onClose} key={`mobile-menu-${idx}`} href={href}>
                {title}
              </Link>
            );
          })}
        </div>
      </div>
    </Drawer>
  );
};

const MobileMenuButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button onClick={onOpen} className="block lg:hidden">
        <MenuIcon className="text-[40px]" />
      </button>
      <MobileMenu isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default MobileMenuButton;
