import { useUrl } from "../../../hooks";

interface SearchListHeaderProps {
  title: string;
  total?: number;
}

export const SearchListHeader = ({ title, total }: SearchListHeaderProps) => {
  const { getParam } = useUrl();

  const position = getParam("position");
  const city = getParam("city");

  const hasPositionOrCity = Boolean(position || city);
  const positionAndCity = hasPositionOrCity ? `, ${position} ${city ? `в ${city}` : ""}` : "";

  return (
    <div className="flex justify-between">
      <h2 className="text-xl font-semibold">
        Найдено {total} {title} {positionAndCity}
      </h2>
    </div>
  );
};
