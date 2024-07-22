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

export const DetailsCard = ({ data, isHiring = false, className }: DetailsCardProps) => {
  const {
    id,
    position,
    about,
    salary,
    employment,
    city,
    schedule,
    education,
    employmentStartDate,
    creationDate,
    phone,
    userName,
    coordinates,
    views,
    applicantsQuantity,
    age,
    gender,
    avatar,
    isInApplies,
    isInFavorites,
  } = data;

  return (
    <Card className={className}>
      <DetailsCardHeaderBlock>
        <DetailsCardHeaderBlock.DetailsCardHeaderTitle
          {...{ userName, avatar, views, isHiring, position, city, coordinates, age, gender }}
        />
        <DetailsCardHeaderBlock.DetailsCardHeaderOperations
          {...{
            id,
            isInApplies,
            isInFavorites,
            creationDate,
            applicantsQuantity,
          }}
        />
      </DetailsCardHeaderBlock>
      <Separator />
      <DetailsCardContentBlock>
        <DetailsCardContentBlock.DetailsCardContentEducation {...{ education, isHiring }} />
        <DetailsCardContentBlock.DetailsCardContentSalary {...{ salary, employment }} />
        <DetailsCardContentBlock.DetailsCardContentSchedule
          {...{ schedule, employmentStartDate }}
        />
        <Separator />
        <DetailsCardContentBlock.DetailsCardContentAbout {...{ about, isHiring }} />
      </DetailsCardContentBlock>
      <DetailsCardFooterBlock>
        <DetailsCardFooterBlock.DetailsCardFooterSocials {...{ phone }} />
      </DetailsCardFooterBlock>
    </Card>
  );
};
