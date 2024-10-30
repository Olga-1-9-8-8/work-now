import { CityType } from "../../../types";
import { capitalizeFirstLetter } from "../../../utils/helpers";
import { CountLabelWithTooltip } from "../../labels";
import { MapBadge } from "./MapBadge";

interface MapCityBadgeGroupProps {
  cities: CityType[];
}

export const MapCityBadgeGroup = ({ cities }: MapCityBadgeGroupProps) => {
  return (
    <CountLabelWithTooltip
      title={<MapBadge city={capitalizeFirstLetter(cities[0].city)} />}
      items={cities}
      renderContent={({ city }) => <MapBadge key={city} city={capitalizeFirstLetter(city)} />}
    />
  );
};
