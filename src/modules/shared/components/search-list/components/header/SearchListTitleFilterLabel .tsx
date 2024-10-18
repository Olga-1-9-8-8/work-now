import { useResponsiveContext } from "../../../../responsive";
import { capitalizeFirstLetter, truncateText } from "../../../../utils/helpers";
import { CountLabelWithTooltip } from "../../../labels";

interface SearchListTitleFilterLabelProps {
  filter: string;
}

export const SearchListTitleFilterLabel = ({ filter }: SearchListTitleFilterLabelProps) => {
  const isMobile = useResponsiveContext();

  const items = filter
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <CountLabelWithTooltip
      title={truncateText(capitalizeFirstLetter(items[0]), isMobile ? 28 : 55)}
      badgeClassName="bg-primary"
      items={items}
      className="min-w-48"
      renderContent={(item) => <span key={item}>{capitalizeFirstLetter(item)}</span>}
    />
  );
};
