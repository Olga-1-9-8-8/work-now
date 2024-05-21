import { Building } from "lucide-react";
import { GenderType } from "../../../../../../../types";
import { TypographyH2 } from "../../../../../../../ui/typography/TypographyH2";
import { capitalizeFirstLetter } from "../../../../../../../utils/helpers";
import { Avatar as AvatarBase } from "../../../../../../avatar";
import { CardTitleWithTooltip } from "../../../../../../card";
import { MapBadge } from "../../../../../../map";
import { DetailsCardHeaderTitlePersonalData } from "./items/DetailsCardHeaderTitlePersonalData";
import { DetailsCardHeaderTitleViews } from "./items/DetailsCardHeaderTitleViews";

interface DetailsCardHeaderTitleProps {
  name: string;
  image?: string;
  views?: number;
  isHiring?: boolean;
  position: string;
  city?: string;
  coordinates?: {
    lat: string;
    lng: string;
  };
  age?: number;
  gender?: GenderType;
}

export const DetailsCardHeaderTitle = ({
  name,
  image,
  views,
  isHiring,
  position,
  city,
  coordinates,
  age,
  gender,
}: DetailsCardHeaderTitleProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <AvatarBase
          className="h-11 w-11"
          icon={isHiring ? Building : undefined}
          user={{ image, fullName: name }}
        />
        <CardTitleWithTooltip title={name} />
        <DetailsCardHeaderTitleViews views={views} />
      </div>
      <div className="flex flex-col gap-2">
        <TypographyH2>{capitalizeFirstLetter(position)}</TypographyH2>

        <div className="flex items-center gap-4 text-muted-foreground">
          {city && <MapBadge city={city} coordinates={coordinates} />}
          <DetailsCardHeaderTitlePersonalData gender={gender} age={age} />
        </div>
      </div>
    </div>
  );
};
