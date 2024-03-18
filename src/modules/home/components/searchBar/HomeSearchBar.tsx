import { useResponsiveContext } from "../../../shared/responsive";
import { HomeSearchBarForm } from "./form/HomeSearchBarForm";
import { HomeSearchBarSearchers } from "./searchers/HomeSearchBarSearchers";

export const HomeSearchBar = () => {
  const isMobile = useResponsiveContext();

  return (
    <div className="flex flex-col gap-8 pb-8">
      {!isMobile && <HomeSearchBarForm />}
      <HomeSearchBarSearchers />
    </div>
  );
};
