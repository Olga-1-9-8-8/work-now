import { Link } from "react-router-dom";
import { LogoIcon } from "../../../../icons";

export const Logo = () => {
  return (
    <Link
      to="/home"
      aria-label="WorkNow"
      className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <LogoIcon className="h-24 w-48" />
    </Link>
  );
};
