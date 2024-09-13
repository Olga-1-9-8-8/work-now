import { ReactNode, useState } from "react";
import { useUrl } from "../../../hooks";
import { useResponsiveContext } from "../../../responsive";
import { UniversalItemType } from "../../../types";
import { DebouncedSearchInput } from "../../search-bar/components/DebouncedSearchInput";
import { SideBar } from "../../side-bar";
import { SideBarItem } from "../../side-bar/components/item/SideBarItem";

interface SearchListAdditionalFiltersProps {
  isHiring: boolean;
  children: ReactNode;
}

export const SearchListAdditionalFilters = ({
  isHiring,
  children,
}: SearchListAdditionalFiltersProps) => {
  const isMobile = useResponsiveContext();
  const { getParam } = useUrl();

  const [positionSearchTerm, setPositionSearchTerm] = useState(getParam("position") || "");

  return (
    <div className="flex gap-4 py-4">
      {isMobile ? null : (
        <SideBar
          isHiring={isHiring}
          render={(key, item) => (
            <SideBarItem
              key={key}
              value={key}
              title={item.title}
              items={item.items as Required<UniversalItemType<string>>[]}
              searchTerm={positionSearchTerm}
              setSearchTerm={setPositionSearchTerm}
            />
          )}
        />
      )}
      <div className="flex-1">
        <div className="flex flex-col gap-4">
          <DebouncedSearchInput
            searchTerm={positionSearchTerm}
            setSearchTerm={setPositionSearchTerm}
            paramName="position"
            placeholder="Введите должность"
          />
          {children}
        </div>
      </div>
    </div>
  );
};
