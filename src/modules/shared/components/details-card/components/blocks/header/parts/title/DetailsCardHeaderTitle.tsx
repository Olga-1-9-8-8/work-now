import { Building } from "lucide-react";
import { CityType, GenderType } from "../../../../../../../types";
import { TypographyH2 } from "../../../../../../../ui/typography/TypographyH2";
import { capitalizeFirstLetter } from "../../../../../../../utils/helpers";
import { useLanguageSwitcher } from "../../../../../../../widgets/languages-switcher/hooks/useLanguageSwitcher";
import { Avatar } from "../../../../../../avatar";
import { CardTitleWithTooltip } from "../../../../../../card";
import { MapCityBadgeGroup } from "../../../../../../map";
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
  const { t } = useLanguageSwitcher("shared");

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
          {isHiring && age && (
            <p className="text-sm font-medium text-muted-foreground">
              {t("shared.details.card.personalData.companyAge.title", { count: Number(age) })}
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
          {cities && <MapCityBadgeGroup cities={cities} />}
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
