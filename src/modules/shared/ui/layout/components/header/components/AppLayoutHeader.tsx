import { Logo } from "./Logo";
import { HeaderNav } from "./nav/HeaderNav";

export const AppLayoutHeader = () => {
  return (
    <header className="w-full bg-primary-dark">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8">
        <div className="flex grow items-center">
          <Logo />
          <HeaderNav />
        </div>
      </div>
    </header>
  );
};
