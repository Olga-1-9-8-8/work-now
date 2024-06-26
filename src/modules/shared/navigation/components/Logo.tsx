import { Link } from "react-router-dom";
import { useResponsiveContext } from "../../responsive/components/ResponsiveProvider";
import { LogoIcon, LogoIconSmall } from "../../ui/icons";

interface LogoProps {
  isShort?: boolean;
}

export const Logo = ({ isShort = false }: LogoProps) => {
  const isMobile = useResponsiveContext();
  return (
    <Link
      to="/home"
      aria-label="WorkNow"
      className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      {isMobile || isShort ? (
        <LogoIconSmall className="h-20 w-28" />
      ) : (
        <LogoIcon className="h-24 w-40" />
      )}
    </Link>
  );
};
