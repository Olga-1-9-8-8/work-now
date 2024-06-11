import { GraduationCap } from "lucide-react";
import { ReactNode } from "react";
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
import { getEducationTitle } from "../../../../card";
import { ThirdPartyHtmlComponent } from "../../../../third-party-html";

interface DetailsCardContentEducationProps {
  education?: EducationType | string;
  isHiring: boolean;
}

const DetailsCardContentEducation = ({ education, isHiring }: DetailsCardContentEducationProps) => {
  return (
    <div className="flex flex-col gap-4">
      <TypographyH4>{isHiring ? "Требуемое" : "Мое"} образование:</TypographyH4>
      <Badge className="flex w-fit gap-1 text-nowrap" shape="square">
        <GraduationCap size={17} />
        <span>
          <span>{getEducationTitle(education)}</span>
        </span>
      </Badge>
    </div>
  );
};

interface DetailsCardContentSalaryProps {
  salary?: number[];
  employment?: EmploymentType[] | string;
}

const DetailsCardContentSalary = ({ salary, employment }: DetailsCardContentSalaryProps) => {
  return (
    <div>
      <TypographyH4>Диапазон оплаты труда</TypographyH4>
      <Card className="rounded-md bg-secondary p-4">
        <TypographyH5 className="text-success">Зарплата {getSalaryTitle(salary)}</TypographyH5>
        <ul className="mt-4 flex flex-wrap gap-4">
          {getBadgesTitle(employment).map((badge, index) => {
            const { badgeTitle } = getBadgeDataByEmploymentType(badge?.title);
            return (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>
                <Badge
                  className="flex gap-1 text-nowrap bg-white text-muted-foreground"
                  variant="outline"
                  shape="square"
                >
                  <span>{badgeTitle || badge?.title}</span>
                </Badge>
              </li>
            );
          })}
        </ul>
      </Card>
    </div>
  );
};

interface DetailsCardContentScheduleProps {
  schedule?: ScheduleType[] | WeekHoursType[] | string;
  employmentStartDate?: Date;
}

const DetailsCardContentSchedule = ({
  schedule,
  employmentStartDate,
}: DetailsCardContentScheduleProps) => {
  return (
    <div className="flex flex-col gap-4">
      <TypographyH4>График работы</TypographyH4>

      <ul className="flex flex-wrap gap-4">
        {getBadgesTitle(schedule).map((badge, index) => {
          const { badgeTitle } = getBadgeDataByScheduleType(badge?.title);
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
              <Badge className="flex gap-1 text-nowrap" variant="success" shape="square">
                <span>{badgeTitle || badge?.title}</span>
              </Badge>
            </li>
          );
        })}
      </ul>

      <div className="flex items-baseline gap-2">
        <TypographyH6 className="text-muted-foreground">Дата начала работы : </TypographyH6>
        <Badge className="flex gap-1 text-nowrap" variant="destructive" shape="square">
          <span>
            {employmentStartDate ? getDayMonthYear(employmentStartDate) : "Как можно скорее"}
          </span>
        </Badge>
      </div>
    </div>
  );
};

interface DetailsCardContentAboutProps {
  about?: string;
  isHiring: boolean;
}

const DetailsCardContentAbout = ({ about, isHiring }: DetailsCardContentAboutProps) => {
  if (!about) return null;
  return (
    <>
      <TypographyH4 className="pt-3">
        {isHiring ? "Чем предстоит заниматься:" : "Обо мне:"}
      </TypographyH4>
      {isHiring ? <ThirdPartyHtmlComponent markup={about} /> : about}
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
DetailsCardContentBlock.DetailsCardContentSchedule = DetailsCardContentSchedule;
DetailsCardContentBlock.DetailsCardContentAbout = DetailsCardContentAbout;