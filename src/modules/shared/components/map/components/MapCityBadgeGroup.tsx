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
      title={
        <MapBadge
          city={capitalizeFirstLetter(cities[0].city)}
          coordinates={cities[0].coordinates}
        />
      }
      items={cities}
      renderContent={({ city, coordinates }) => (
        <MapBadge key={city} city={capitalizeFirstLetter(city)} coordinates={coordinates} />
      )}
    />
  );
};
