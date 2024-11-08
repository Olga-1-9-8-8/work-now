import { useResponsiveContext } from "../../../../responsive";
import { capitalizeFirstLetter, truncateText } from "../../../../utils/helpers";
import { CountLabelWithTooltip } from "../../../labels";

interface SearchListTitleFilterLabelProps {
  titleItems: string[];
}

export const SearchListTitleFilterLabel = ({ titleItems }: SearchListTitleFilterLabelProps) => {
  const isMobile = useResponsiveContext();

  return (
    <CountLabelWithTooltip
      title={truncateText(capitalizeFirstLetter(titleItems[0]), isMobile ? 24 : 55)}
      badgeClassName="bg-primary"
      items={titleItems}
      className="min-w-48"
      renderContent={(item) => <span key={item}>{capitalizeFirstLetter(item)}</span>}
    />
  );
};
