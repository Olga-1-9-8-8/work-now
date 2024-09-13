import { ReactNode } from "react";
import { useUrl } from "../../../hooks";
import { Tooltip } from "../../../ui/tooltip/Tooltip";
import { truncateText } from "../../../utils/helpers";

interface SearchListTitleProps {
  title: ReactNode;
}

export const SearchListTitle = ({ title }: SearchListTitleProps) => {
  const { getParam } = useUrl();
  const position = getParam("position");
  const cities = getParam("cities");

  const positionAndCity = [position, cities].filter(Boolean).join(", ");

  return (
    <div className="flex justify-between">
      <h2 className="flex gap-2 text-xl font-semibold">
        {title}
        {positionAndCity && (
          <Tooltip content={positionAndCity} className="w-96">
            <span> {truncateText(positionAndCity, 35)}</span>
          </Tooltip>
        )}
      </h2>
    </div>
  );
};
