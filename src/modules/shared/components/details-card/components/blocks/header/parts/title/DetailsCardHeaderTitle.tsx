import { Building } from "lucide-react";
import { CityType, GenderType } from "../../../../../../../types";
import { Tooltip } from "../../../../../../../ui/tooltip/Tooltip";
import { TypographyH2 } from "../../../../../../../ui/typography/TypographyH2";
import {
  capitalizeFirstLetter,
  getRightNounYearDeclension,
} from "../../../../../../../utils/helpers";
import { Avatar } from "../../../../../../avatar";
import { CardTitleWithTooltip } from "../../../../../../card";
import { MapBadge } from "../../../../../../map";
import { DetailsCardHeaderTitlePersonalData } from "./items/DetailsCardHeaderTitlePersonalData";
import { DetailsCardHeaderTitleViews } from "./items/DetailsCardHeaderTitleViews";

interface DetailsCardHeaderTitleProps {
  id: number;
  userName?: string;
  avatar?: string;
  views: number;
  isHiring: boolean;
  position: string;
  cities?: CityType[];
  age?: number | string;
  gender?: GenderType;
}

export const DetailsCardHeaderTitle = ({
  id,
  userName,
  avatar,
  views,
  isHiring,
  position,
  cities,
  age,
  gender,
}: DetailsCardHeaderTitleProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Avatar
          className="h-20 w-20 rounded-full border-2"
          icon={isHiring ? Building : undefined}
          src={avatar}
          userName={userName}
        />
        <div className="flex flex-col ">
          <CardTitleWithTooltip title={userName ?? "Аноним"} />
          {isHiring && (
            <p className="text-sm font-medium text-muted-foreground">
              {getRightNounYearDeclension(String(age))} на рынке
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <TypographyH2>{capitalizeFirstLetter(position)}</TypographyH2>
          <DetailsCardHeaderTitleViews views={views} isHiring={isHiring} id={id} />
        </div>

        <div className="flex items-center gap-4 text-muted-foreground">
          {cities && (
            <div className="flex">
              <MapBadge city={cities[0].city} coordinates={cities[0].coordinates} />
              {cities.length > 1 && (
                <Tooltip
                  content={
                    <div>
                      {cities.slice(1).map(({ city, coordinates }) => (
                        <MapBadge key={city} city={city} coordinates={coordinates} />
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
          )}
          <DetailsCardHeaderTitlePersonalData
            gender={gender}
            age={isHiring ? undefined : age}
            isHiring={isHiring}
          />
        </div>
      </div>
    </div>
  );
};
