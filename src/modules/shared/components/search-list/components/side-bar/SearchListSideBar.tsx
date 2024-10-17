import { useCallback } from "react";
import { useResponsiveContext } from "../../../../responsive";
import { UniversalItemType, UniversalItemsWithTitleType } from "../../../../types";
import { SideBar } from "../../../side-bar";
import { SideBarItem } from "../../../side-bar/components/item/SideBarItem";

interface SearchListSideBarProps<T extends Record<string, string>> {
  isHiring: boolean;
  searchTerms: T;
  onSearchTermChange: (key: keyof T, value: string) => void;
}

export const SearchListSideBar = <T extends Record<string, string>>({
  isHiring,
  searchTerms,
  onSearchTermChange,
}: SearchListSideBarProps<T>) => {
  const isMobile = useResponsiveContext();

  const renderSideBarItem = useCallback(
    (key: string, item: UniversalItemsWithTitleType) => {
      const formattedValue = searchTerms[key]
        .trim()
        .split(",")
        .map((i) => i.trim())
        .join(",")
        .toLowerCase();

      return (
        <SideBarItem
          key={key}
          value={key}
          title={item.title}
          items={item.items as Required<UniversalItemType<string>>[]}
          defaultSearchTerm={formattedValue}
          onSearchTermChange={(value) => onSearchTermChange(key, value)}
        />
      );
    },
    [onSearchTermChange, searchTerms],
  );

  if (isMobile) return null;
  return <SideBar isHiring={isHiring} render={renderSideBarItem} />;
};
