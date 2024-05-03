import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { CalendarDays, ClipboardCheck, GraduationCap, UsersRound } from "lucide-react";
import { ReactNode, useState } from "react";
import { FaCircleChevronDown, FaCircleChevronUp } from "react-icons/fa6";
import { EducationType } from "../../../../../configs/searchOptionsConfig";
import { Button } from "../../../../../ui/buttons/Button";
import { CardDescription, CardHeader, CardTitle } from "../../../../../ui/card/Card";
import { Separator } from "../../../../../ui/separator/Separator";
import { Tooltip } from "../../../../../ui/tooltip/Tooltip";
import { TypographyH5 } from "../../../../../ui/typography/TypographyH5";
import {
  capitalizeFirstLetter,
  formattedTimeString,
  getDayMonthYear,
  truncateText,
} from "../../../../../utils/helpers";
import { Avatar } from "../../../../avatar";
import { educationValueToEducationTitle } from "../../../const/educationValueToEducationTitle";
import { getBadgeVariantByStartDate } from "../../../utils/getBadgeVariantByStartDate";
import { getDiapasonString } from "../../../utils/getDiapasonString";
import { SearchCardItemInsight } from "../../item/SearchCardItemInsight";
import { SearchCardHeaderDetailsLocation } from "./parts/SearchCardHeaderDetailsLocation";

interface SearchCardHeaderTitleProps {
  name: string;
  image?: string;
  position: string;
}

export const SearchCardHeaderTitle = ({ name, image, position }: SearchCardHeaderTitleProps) => {
  return (
    <div className="flex flex-col items-start gap-4 sm:flex-row">
      <Avatar className="h-16 w-16" user={{ image, fullName: name }} />

      <div>
        <CardTitle className="text-xl md:text-2xl">{capitalizeFirstLetter(position)}</CardTitle>
        <Tooltip content={name} className="max-w-96">
          <span>
            <TypographyH5 className="font-medium text-primary-extraDark">
              {truncateText(name, 55)}
            </TypographyH5>
          </span>
        </Tooltip>
      </div>
    </div>
  );
};

interface SearchCardHeaderDetailsProps {
  city?: string;
  education?: EducationType;
  creationDate?: Date | null;
  coordinates?: {
    lat: string;
    lng: string;
  };
}
export const SearchCardHeaderDetails = ({
  city,
  education,
  creationDate,
  coordinates,
}: SearchCardHeaderDetailsProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center">
        {city && <SearchCardHeaderDetailsLocation city={city} coordinates={coordinates} />}
        <SearchCardItemInsight
          className="items-center gap-2"
          icon={GraduationCap}
          title={education ? educationValueToEducationTitle[education] : "Не указано"}
        />
      </div>
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
      <SearchCardItemInsight
        icon={CalendarDays}
        title="Дата выхода:"
        badges={[
          { title: employmentStartDate ? getDayMonthYear(employmentStartDate) : "immediately" },
        ]}
        getBadgeData={getBadgeVariantByStartDate}
      />
      <SearchCardItemInsight
        icon={UsersRound}
        title={getDiapasonString(views, "просмотров")}
        className={`${views && "border-2 border-success"} items-center rounded-lg p-2 md:w-fit xl:w-full`}
      />
      <SearchCardItemInsight
        icon={ClipboardCheck}
        title={getDiapasonString(applicantsQuantity, "откликов")}
        className={`${applicantsQuantity && "border-2 border-success bg-success/5"} items-center rounded-lg p-2 md:w-fit xl:w-full `}
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
          <Button variant="ghost" size="icon">
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
