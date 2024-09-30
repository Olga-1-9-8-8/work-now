import { useResponsiveContext } from "../../../../responsive";
import { UniversalItemType } from "../../../../types";
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
  if (isMobile) return null;

  return (
    <SideBar
      isHiring={isHiring}
      render={(key, item) => (
        <SideBarItem
          key={key}
          value={key}
          title={item.title}
          items={item.items as Required<UniversalItemType<string>>[]}
          defaultSearchTerm={searchTerms[key as keyof T]}
          onSearchTermChange={(value) => onSearchTermChange(key, value)}
        />
      )}
    />
  );
};
