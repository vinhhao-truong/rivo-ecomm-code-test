import React from "react";
import Button from "@/components/pages/Home/common/Button";
import { FiLogIn as LoginIcon } from "react-icons/fi";
import useResponsive from "@/hooks/useResponsive";

const LoginButton = () => {
  return (
    <Button
      hoverIcon={<LoginIcon />}
      style={{
        width: "142px",
        height: "52px",
      }}
      styleTablet={{
        width: "100px",
        height: "40px",
        fontSize: "16px",
      }}
      styleMobile={{
        width: "70px",
        height: "36px",
        fontSize: "14px",
      }}
      type="Outlined"
    >
      LOGIN
    </Button>
  );
};

export default LoginButton;
