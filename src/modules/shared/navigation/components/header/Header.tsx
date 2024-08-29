import { memo } from "react";
import { Logo } from "../Logo";
import { HeaderNavigation } from "./HeaderNavigation";

export const Header = memo(() => {
  return (
    <div className="flex min-h-24 items-center justify-between">
      <Logo />
      <HeaderNavigation />
    </div>
  );
});
