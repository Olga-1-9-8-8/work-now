import { Building, CalendarDays, ClipboardCheck, EyeIcon, GraduationCap } from "lucide-react";
import { ReactNode, memo, useState } from "react";
import { FaCircleChevronDown, FaCircleChevronUp, FaPerson } from "react-icons/fa6";
import { LanguageType } from "../../../../../configs";
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
import { getBadgeDataByStartDate } from "../../../../../utils";
import {
  capitalizeFirstLetter,
  formattedTimeString,
  getDayMonthYear,
} from "../../../../../utils/helpers";
import { useLanguageSwitcher } from "../../../../../widgets/languages-switcher/hooks/useLanguageSwitcher";
import { Avatar } from "../../../../avatar";
import { CardItemInsight, CardTitleWithTooltip, getEducationTitle } from "../../../../card";
import { MapCityBadgeGroup } from "../../../../map";
import { getPersonalInfoTitle } from "../../../utils/getPersonalInfoTitle";

interface SearchCardHeaderTitleProps {
  userName?: string;
  avatar?: string;
  position: string;
  isHiring?: boolean;
}

export const SearchCardHeaderTitle = memo(
  ({ userName, avatar, position, isHiring }: SearchCardHeaderTitleProps) => {
    const { t } = useLanguageSwitcher("shared");
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
          <CardTitleWithTooltip title={userName ?? t("shared.anonymous")} />
        </div>
      </div>
    );
  },
);

interface SearchCardHeaderDetailsProps {
  cities?: CityType[];
  education?: EducationType;
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
  const { t, language } = useLanguageSwitcher("shared");
  return (
    <div className="flex flex-col gap-1">
      <div className="mt-1 flex gap-1">
        {creationDate && (
          <Badge shape="square" variant="secondary" className="font-semibold text-muted-foreground">
            {t("shared.created")} {formattedTimeString(creationDate, language as LanguageType)}{" "}
            {updatedAt &&
              `/ ${t("shared.updated")} ${formattedTimeString(updatedAt, language as LanguageType)}`}
          </Badge>
        )}
      </div>
      <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
        {cities && <MapCityBadgeGroup cities={cities} />}

        <CardItemInsight
          className="items-center gap-2 text-primary-extraDark"
          icon={GraduationCap}
          title={
            education
              ? getEducationTitle(education, language as LanguageType)
              : t("shared.details.card.education.notSpecified")
          }
        />
      </div>
      {(gender || age) && (
        <CardItemInsight
          className="items-center gap-2 text-primary-extraDark "
          icon={FaPerson}
          title={getPersonalInfoTitle(language as LanguageType, t, gender, age, isHiring)}
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
  const { language, t } = useLanguageSwitcher("shared");

  return (
    <div className="flex flex-col gap-3">
      <CardItemInsight
        icon={CalendarDays}
        title={t("shared.details.card.employment.startDate.title")}
        badges={[
          {
            title: employmentStartDate
              ? getDayMonthYear(employmentStartDate, language as LanguageType)
              : "immediately",
          },
        ]}
        getBadgeData={(title) => getBadgeDataByStartDate(language as LanguageType, title)}
      />
      <CardItemInsight
        icon={EyeIcon}
        title={
          views
            ? t("shared.search.card.views.count", { count: views })
            : t("shared.search.card.views.notSpecified")
        }
        className="items-center rounded-lg  md:w-fit xl:w-full"
      />

      <CardItemInsight
        icon={ClipboardCheck}
        title={
          applicantsQuantity
            ? t("shared.search.card.applies.count", { count: views })
            : t("shared.search.card.applies.notSpecified")
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
      <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down">
        {content}
      </CollapsibleContent>
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
