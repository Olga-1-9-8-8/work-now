import { memo } from "react";
import { UniversalCardItemType } from "../../../types";
import { Card } from "../../../ui/card/Card";
import { Separator } from "../../../ui/separator/Separator";
import { DetailsCardContentBlock } from "./blocks/content/DetailsCardContentBlock";
import { DetailsCardFooterBlock } from "./blocks/footer/DetailsCardFooterBlock";
import { DetailsCardHeaderBlock } from "./blocks/header/DetailsCardHeaderBlock";

interface DetailsCardProps {
  data: UniversalCardItemType;
  isHiring?: boolean;
  className?: string;
}

export const DetailsCard = memo(({ data, isHiring = false, className }: DetailsCardProps) => {
  const {
    id,
    position,
    about,
    salary,
    employment,
    cities,
    schedule,
    weekHours,
    education,
    employmentStartDate,
    creationDate,
    updatedAt,
    phone,
    userName,
    views,
    applicantsQuantity,
    age,
    gender,
    avatar,
    language,
    userId,
  } = data;

  return (
    <Card className={className}>
      <DetailsCardHeaderBlock>
        <DetailsCardHeaderBlock.DetailsCardHeaderTitle
          {...{ userName, avatar, views, isHiring, position, cities, age, gender, id }}
        />
        <DetailsCardHeaderBlock.DetailsCardHeaderOperations
          {...{
            id,
            creationDate,
            updatedAt,
            applicantsQuantity,
            isHiring,
            userId,
          }}
        />
      </DetailsCardHeaderBlock>
      <Separator />
      <DetailsCardContentBlock>
        <DetailsCardContentBlock.DetailsCardContentSalary {...{ salary, language }} />
        <DetailsCardContentBlock.DetailsCardContentEducation {...{ education, isHiring }} />
        <DetailsCardContentBlock.DetailsCardContentEmployment {...{ employment }} />
        <DetailsCardContentBlock.DetailsCardContentSchedule
          {...{ schedule, employmentStartDate, weekHours }}
        />
        <Separator />
        <DetailsCardContentBlock.DetailsCardContentAbout {...{ about, isHiring }} />
      </DetailsCardContentBlock>
      <DetailsCardFooterBlock>
        <DetailsCardFooterBlock.DetailsCardFooterSocials {...{ phone, isHiring, userId }} />
      </DetailsCardFooterBlock>
    </Card>
  );
});
