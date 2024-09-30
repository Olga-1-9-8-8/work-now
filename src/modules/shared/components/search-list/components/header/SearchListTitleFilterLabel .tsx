import { capitalizeFirstLetter } from "../../../../utils/helpers";
import { CountLabelWithTooltip } from "../../../labels";

interface SearchListTitleFilterLabelProps {
  filter: string;
}

export const SearchListTitleFilterLabel = ({ filter }: SearchListTitleFilterLabelProps) => {
  const items = filter
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <CountLabelWithTooltip
      title={capitalizeFirstLetter(items[0])}
      badgeClassName="bg-primary"
      items={items}
      className="min-w-48"
      renderContent={(item) => <span key={item}>{capitalizeFirstLetter(item)}</span>}
    />
  );
};
