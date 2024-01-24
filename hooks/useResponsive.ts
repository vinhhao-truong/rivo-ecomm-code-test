import { useMediaQuery } from "@mui/material";

type Responsiveness = "mobile" | "tablet" | "desktop";

export default function useResponsive(): Responsiveness {
  const isTablet = useMediaQuery("(min-width:768px)");
  const isDesktop = useMediaQuery("(min-width:1024px)");

  if (isDesktop) return "desktop";

  if (isTablet) return "tablet";

  return "mobile";
}
