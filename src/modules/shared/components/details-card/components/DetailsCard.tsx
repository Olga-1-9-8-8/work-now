import { UniversalCardItemType } from "../../../types";
import { Card, CardFooter } from "../../../ui/card/Card";
import { Separator } from "../../../ui/separator/Separator";
import { TypographyH4 } from "../../../ui/typography/TypographyH4";
import { CardSocialsButtons } from "../../card";
import { DetailsCardContentBlock } from "./blocks/content/DetailsCardContentBlock";
import { DetailsCardHeaderBlock } from "./blocks/header/DetailsCardHeaderBlock";

interface DetailsCardProps {
  data: UniversalCardItemType;
  isHiring?: boolean;
  className?: string;
  onApplyClick: (isApplied: boolean) => void;
  onFavoriteClick: (isFavorite: boolean) => void;
  disabled?: boolean;
}

export const DetailsCard = ({
  data,
  isHiring = false,
  onApplyClick,
  onFavoriteClick,
  disabled,
  className,
}: DetailsCardProps) => {
  const {
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
    image,
  } = data;

  return (
    <Card className={className}>
      <DetailsCardHeaderBlock>
        <DetailsCardHeaderBlock.DetailsCardHeaderTitle
          {...{ userName, image, views, isHiring, position, city, coordinates, age, gender }}
        />
        <DetailsCardHeaderBlock.DetailsCardHeaderOperations
          {...{ onApplyClick, disabled, onFavoriteClick, creationDate, applicantsQuantity }}
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
      <CardFooter className="flex flex-col items-start gap-4">
        <TypographyH4 className="py-3">Способы связи:</TypographyH4>
        <CardSocialsButtons phone={phone} />
      </CardFooter>
    </Card>
  );
};
