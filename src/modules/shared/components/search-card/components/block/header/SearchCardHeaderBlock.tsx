import { Building, CalendarDays, ClipboardCheck, EyeIcon, GraduationCap } from "lucide-react";
import { ReactNode, useState } from "react";
import { FaCircleChevronDown, FaCircleChevronUp, FaPerson } from "react-icons/fa6";
import { CityType, EducationType, GenderType } from "../../../../../types";
import { Badge } from "../../../../../ui/badge/Badge";
import { Button } from "../../../../../ui/buttons/Button";
import { CardHeader, CardTitle } from "../../../../../ui/card/Card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../../ui/collapsible/Collapsible";
import { Separator } from "../../../../../ui/separator/Separator";
import { Tooltip } from "../../../../../ui/tooltip/Tooltip";
import { getBadgeDataByStartDate } from "../../../../../utils";
import {
  capitalizeFirstLetter,
  formattedTimeString,
  getDayMonthYear,
  getRightNounWordDeclension,
} from "../../../../../utils/helpers";
import { Avatar } from "../../../../avatar";
import { CardItemInsight, CardTitleWithTooltip, getEducationTitle } from "../../../../card";
import { MapBadge } from "../../../../map";
import { getPersonalInfoTitle } from "../../../utils/getPersonalInfoTitle";

interface SearchCardHeaderTitleProps {
  userName?: string;
  avatar?: string;
  position: string;
  isHiring?: boolean;
}

export const SearchCardHeaderTitle = ({
  userName,
  avatar,
  position,
  isHiring,
}: SearchCardHeaderTitleProps) => {
  return (
    <div className="flex flex-col items-start gap-4 sm:flex-row">
      <Avatar
        className="h-16 w-16 border-2"
        icon={isHiring ? Building : undefined}
        src={avatar}
        userName={userName}
      />
      <div>
        <CardTitle className="text-xl md:text-2xl">{capitalizeFirstLetter(position)}</CardTitle>
        <CardTitleWithTooltip title={userName ?? "Аноним"} />
      </div>
    </div>
  );
};

interface SearchCardHeaderDetailsProps {
  cities?: CityType[];
  education?: EducationType | string;
  creationDate?: Date | null;
  updatedAt?: Date | null;
  age?: string;
  gender?: GenderType;
  isHiring: boolean;
}

export const SearchCardHeaderDetails = ({
  cities,
  education,
  creationDate,
  updatedAt,
  age,
  gender,
  isHiring,
}: SearchCardHeaderDetailsProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="mt-1 flex gap-1">
        {creationDate && (
          <Badge shape="square" variant="secondary" className="font-semibold text-muted-foreground">
            От {formattedTimeString(creationDate)}{" "}
            {updatedAt && `/ Обновлено ${formattedTimeString(updatedAt)}`}
          </Badge>
        )}
      </div>
      <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
        {cities && (
          <div className="flex">
            <MapBadge city={cities[0].city} coordinates={cities[0].coordinates} />
            {cities.length > 1 && (
              <Tooltip
                content={
                  <div className="flex flex-col gap-2">
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

        <CardItemInsight
          className="items-center gap-2 text-primary-extraDark"
          icon={GraduationCap}
          title={getEducationTitle(education)}
        />
      </div>
      {(gender || age) && (
        <CardItemInsight
          className="items-center gap-2 text-primary-extraDark "
          icon={FaPerson}
          title={getPersonalInfoTitle(age, gender, isHiring)}
        />
      )}
    </div>
  );
};

interface SearchCardHeaderDatesDetailsProps {
  employmentStartDate?: Date | null;
  views?: number;
  applicantsQuantity?: number;
}
export const SearchCardHeaderSideDetails = ({
  employmentStartDate,
  applicantsQuantity,
  views,
}: SearchCardHeaderDatesDetailsProps) => {
  return (
    <div className="flex flex-col gap-3">
      <CardItemInsight
        icon={CalendarDays}
        title="Дата выхода:"
        badges={[
          { title: employmentStartDate ? getDayMonthYear(employmentStartDate) : "immediately" },
        ]}
        getBadgeData={getBadgeDataByStartDate}
      />
      <CardItemInsight
        icon={EyeIcon}
        title={
          views ? getRightNounWordDeclension(views, "просмотр", ["", "а", "ов"]) : "Нет просмотров"
        }
        className="items-center rounded-lg  md:w-fit xl:w-full"
      />
      <CardItemInsight
        icon={ClipboardCheck}
        title={
          applicantsQuantity
            ? getRightNounWordDeclension(applicantsQuantity, "отклик", ["", "а", "ов"])
            : "Нет откликов"
        }
        className={`items-center rounded-lg  md:w-fit xl:w-full `}
      />
    </div>
  );
};

interface SearchCardHeaderAdditionalInfoProps {
  content: ReactNode;
}
export const SearchCardHeaderAdditionalInfo = ({
  content,
}: SearchCardHeaderAdditionalInfoProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible className="flex flex-col gap-4" open={open} onOpenChange={setOpen}>
      <div className="flex w-full justify-center">
        <CollapsibleTrigger asChild>
          <Button variant="ghost" onClick={(e) => e.stopPropagation()} size="icon">
            {open ? (
              <FaCircleChevronUp size={30} className="fill-primary-extraDark" />
            ) : (
              <FaCircleChevronDown size={30} className="fill-primary-extraDark" />
            )}
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>{content}</CollapsibleContent>
    </Collapsible>
  );
};

interface SearchCardHeaderBlockProps {
  children: ReactNode;
}

export const SearchCardHeaderBlock = ({ children }: SearchCardHeaderBlockProps) => {
  return (
    <CardHeader>
      {children}
      <Separator />
    </CardHeader>
  );
};

SearchCardHeaderBlock.SearchCardHeaderTitle = SearchCardHeaderTitle;
SearchCardHeaderBlock.SearchCardHeaderDetails = SearchCardHeaderDetails;
SearchCardHeaderBlock.SearchCardHeaderSideDetails = SearchCardHeaderSideDetails;
SearchCardHeaderBlock.SearchCardHeaderAdditionalInfo = SearchCardHeaderAdditionalInfo;
