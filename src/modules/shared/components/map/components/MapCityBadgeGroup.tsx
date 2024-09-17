import { CityType } from "../../../types";
import { Tooltip } from "../../../ui/tooltip/Tooltip";
import { capitalizeFirstLetter } from "../../../utils/helpers";
import { MapBadge } from "./MapBadge";

interface MapCityBadgeGroupProps {
  cities: CityType[];
}

export const MapCityBadgeGroup = ({ cities }: MapCityBadgeGroupProps) => {
  return (
    <div className="flex">
      <MapBadge city={capitalizeFirstLetter(cities[0].city)} coordinates={cities[0].coordinates} />
      {cities.length > 1 && (
        <Tooltip
          content={
            <div className="flex flex-col gap-2">
              {cities.slice(1).map(({ city, coordinates }) => (
                <MapBadge key={city} city={capitalizeFirstLetter(city)} coordinates={coordinates} />
              ))}
            </div>
          }
        >
          <div className=" right-0 top-0 flex h-5 w-5 items-center justify-center rounded-e-md bg-success">
            <span className="text-[0.8rem] text-white"> +{cities.length - 1}</span>
          </div>
        </Tooltip>
      )}
    </div>
  );
};
