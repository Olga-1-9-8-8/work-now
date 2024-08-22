import { useUrl } from "../../../hooks";
import { Tooltip } from "../../../ui/tooltip/Tooltip";
import { truncateText } from "../../../utils/helpers";

interface SearchListHeaderProps {
  title: string;
}

export const SearchListHeader = ({ title }: SearchListHeaderProps) => {
  const { getParam } = useUrl();

  const position = getParam("position");
  const city = getParam("city");

  const hasPositionOrCity = Boolean(position || city);
  const positionAndCity = hasPositionOrCity
    ? `${position ? `${position}` : ""}${city ? `,${city}` : ""}`
    : "";

  return (
    <div className="flex justify-between">
      <h2 className="text-xl font-semibold">
        Найдено {title}
        {positionAndCity && (
          <Tooltip content={positionAndCity} className="w-96">
            <span> {truncateText(positionAndCity, 35)}</span>
          </Tooltip>
        )}
      </h2>
    </div>
  );
};
