import { Building, CalendarDays, ClipboardCheck, EyeIcon, GraduationCap } from "lucide-react";
import { ReactNode, useState } from "react";
import { FaCircleChevronDown, FaCircleChevronUp, FaPerson } from "react-icons/fa6";
import { EducationType, GenderType, getGenderTitle } from "../../../../../types";
import { Button } from "../../../../../ui/buttons/Button";
import { CardDescription, CardHeader, CardTitle } from "../../../../../ui/card/Card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../../ui/collapsible/Collapsible";
import { Separator } from "../../../../../ui/separator/Separator";
import { getBadgeDataByStartDate } from "../../../../../utils";
import {
  capitalizeFirstLetter,
  formattedTimeString,
  getDayMonthYear,
  getRightNounWordDeclension,
  getRightNounYearDeclension,
} from "../../../../../utils/helpers";
import { Avatar } from "../../../../avatar";
import { CardItemInsight, CardTitleWithTooltip, getEducationTitle } from "../../../../card";
import { MapBadge } from "../../../../map";

interface SearchCardHeaderTitleProps {
  userName: string;
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
        <CardTitleWithTooltip title={userName} />
      </div>
    </div>
  );
};

interface SearchCardHeaderDetailsProps {
  city?: string;
  education?: EducationType | string;
  creationDate?: Date | null;
  coordinates?: {
    lat: string;
    lng: string;
  };
  age?: number | string;
  gender?: GenderType;
}
export const SearchCardHeaderDetails = ({
  city,
  education,
  creationDate,
  coordinates,
  age,
  gender,
}: SearchCardHeaderDetailsProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center">
        {city && <MapBadge city={city} coordinates={coordinates} />}
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
          title={`${gender ? getGenderTitle(gender) : "Пол не указан"}  ${age ? `/ ${getRightNounYearDeclension(String(age))}` : ""}`}
        />
      )}
      {creationDate && (
        <CardDescription className="pl-1 font-semibold text-muted-foreground opacity-85">
          Обновлено {formattedTimeString(creationDate)}
        </CardDescription>
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
