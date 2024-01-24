import useResponsive from "@/hooks/useResponsive";
interface ResponsiveStyle {
  styleMobile?: React.CSSProperties;
  styleTablet?: React.CSSProperties;
  style?: React.CSSProperties;
}

export default function useResponsiveStyle(
  responsiveStyle: ResponsiveStyle
): React.CSSProperties {
  const responsive = useResponsive();

  if (responsive === "mobile" && !!responsiveStyle.styleMobile)
    return responsiveStyle.styleMobile;

  if (responsive === "tablet" && !!responsiveStyle.styleTablet)
    return responsiveStyle.styleTablet;

  return responsiveStyle.style ?? {};
}
