import { Clock8, GraduationCap } from "lucide-react";
import { ReactNode } from "react";
import { LanguageType } from "../../../../../configs";
import { EducationType, EmploymentType, ScheduleType, WeekHoursType } from "../../../../../types";
import { Badge } from "../../../../../ui/badge/Badge";
import { Card, CardContent } from "../../../../../ui/card/Card";
import { TypographyH4 } from "../../../../../ui/typography/TypographyH4";
import { TypographyH5 } from "../../../../../ui/typography/TypographyH5";
import { TypographyH6 } from "../../../../../ui/typography/TypographyH6";
import {
  getBadgeDataByEmploymentType,
  getBadgeDataByScheduleType,
  getBadgesTitle,
  getSalaryTitle,
} from "../../../../../utils";
import { getDayMonthYear } from "../../../../../utils/helpers";
import { useLanguageSwitcher } from "../../../../../widgets/languages-switcher";
import { getEducationTitle } from "../../../../card";

interface DetailsCardContentEducationProps {
  education?: EducationType;
  isHiring: boolean;
}

const DetailsCardContentEducation = ({ education, isHiring }: DetailsCardContentEducationProps) => {
  const { t, language } = useLanguageSwitcher("shared");
  return (
    <div className="flex flex-col gap-4">
      <TypographyH4>
        {isHiring
          ? t("shared.details.card.education.company.title")
          : t("shared.details.card.education.candidate.title")}
        :
      </TypographyH4>
      <Badge variant="secondary" className="flex w-fit gap-1 text-nowrap" shape="square">
        <GraduationCap size={17} />
        <span>
          <span>
            {education
              ? getEducationTitle(education, language as LanguageType)
              : t("shared.details.card.education.notSpecified")}
          </span>
        </span>
      </Badge>
    </div>
  );
};

interface DetailsCardContentSalaryProps {
  salary?: number[];
  language: LanguageType;
}

const DetailsCardContentSalary = ({ salary, language }: DetailsCardContentSalaryProps) => {
  const { t } = useLanguageSwitcher("shared");
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Card className="rounded-md bg-secondary p-4">
          <TypographyH4>{t("shared.details.card.salary.title")}</TypographyH4>
          <TypographyH5 className="text-success">{getSalaryTitle(language, salary)}</TypographyH5>
        </Card>
      </div>
    </div>
  );
};

interface DetailsCardContentEmploymentProps {
  employment?: EmploymentType[] | string;
}

const DetailsCardContentEmployment = ({ employment }: DetailsCardContentEmploymentProps) => {
  const { t, language } = useLanguageSwitcher("shared");
  return (
    <div>
      <TypographyH4>{t("shared.details.card.employment.title")}</TypographyH4>
      <ul className="mt-4 flex flex-wrap gap-4">
        {getBadgesTitle(employment).map((badge, index) => {
          const { badgeTitle } = getBadgeDataByEmploymentType(
            language as LanguageType,
            badge?.title,
          );
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
              <Badge className="flex gap-1 text-nowrap bg-white" variant="outline" shape="square">
                <span>{badgeTitle || badge?.title}</span>
              </Badge>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

interface DetailsCardContentScheduleProps {
  schedule?: ScheduleType[] | string;
  weekHours?: WeekHoursType[];
  employmentStartDate?: Date;
}

const DetailsCardContentSchedule = ({
  schedule,
  employmentStartDate,
  weekHours,
}: DetailsCardContentScheduleProps) => {
  const { t, language } = useLanguageSwitcher("shared");
  return (
    <div className="flex flex-col gap-4">
      <TypographyH4>{t("shared.details.card.employment.schedule.title")}</TypographyH4>

      <ul className="flex flex-wrap gap-4">
        {getBadgesTitle(schedule).map((badge, index) => {
          const { badgeTitle } = getBadgeDataByScheduleType(language as LanguageType, badge?.title);
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
              <Badge className="flex gap-1 text-nowrap" variant="outline" shape="square">
                <span>{badgeTitle || badge?.title}</span>
              </Badge>
            </li>
          );
        })}
      </ul>

      <div className="flex items-baseline gap-2 pt-4">
        <TypographyH6 className="text-muted-foreground">
          {t("shared.details.card.employment.title")}
        </TypographyH6>
        <Badge className="flex gap-1 text-nowrap" variant="destructive" shape="square">
          <span>
            {employmentStartDate
              ? getDayMonthYear(employmentStartDate, language as LanguageType)
              : t("shared.details.card.employment.startDate.notSpecified")}
          </span>
        </Badge>
      </div>
      {weekHours !== undefined && weekHours.length > 0 && (
        <div className="flex gap-2">
          {weekHours.map((weekHour) => (
            <Badge key={weekHour} shape="square" variant="success" className="gap-2">
              <Clock8 size={21} />
              {weekHour} {t("shared.details.card.employment.weekHours.title")}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};

interface DetailsCardContentAboutProps {
  about?: string;
  isHiring: boolean;
}

const DetailsCardContentAbout = ({ about, isHiring }: DetailsCardContentAboutProps) => {
  const { t } = useLanguageSwitcher("shared");
  if (!about) return null;
  return (
    <>
      <TypographyH4 className="pt-3">
        {isHiring
          ? t("shared.details.card.about.company")
          : t("shared.details.card.about.candidate")}
      </TypographyH4>
      <div className="whitespace-pre-wrap">{about}</div>
    </>
  );
};

interface DetailsCardHeaderBlockProps {
  children: ReactNode;
}

export const DetailsCardContentBlock = ({ children }: DetailsCardHeaderBlockProps) => {
  return <CardContent className="flex flex-col gap-8 py-4">{children}</CardContent>;
};

DetailsCardContentBlock.DetailsCardContentEducation = DetailsCardContentEducation;
DetailsCardContentBlock.DetailsCardContentSalary = DetailsCardContentSalary;
DetailsCardContentBlock.DetailsCardContentEmployment = DetailsCardContentEmployment;
DetailsCardContentBlock.DetailsCardContentSchedule = DetailsCardContentSchedule;
DetailsCardContentBlock.DetailsCardContentAbout = DetailsCardContentAbout;
