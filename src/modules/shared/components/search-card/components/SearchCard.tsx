import { Card } from "../../../ui/card/Card";
import { TypographyH5 } from "../../../ui/typography/TypographyH5";
import { ThirdPartyHtmlComponent } from "../../third-party-html";
import { SearchCardListItem } from "../types/SearchCardList";
import { SearchCardDetailsBlock } from "./block/SearchCardDetailsBlock";
import { SearchCardOperationsFooterBlock } from "./block/SearchCardOperationsFooterBlock";
import { SearchCardHeaderBlock } from "./block/header/SearchCardHeaderBlock";

interface SearchCardProps {
  data: SearchCardListItem;
  onClick: (id: number) => void;
  isHiring?: boolean;
}

export const SearchCard = ({ data, onClick, isHiring = false }: SearchCardProps) => {
  const {
    position,
    about,
    salary,
    employment,
    city,
    schedule,
    id,
    education,
    employmentStartDate,
    creationDate,
    phone,
    name,
    coordinates,
    views,
    applicantsQuantity,
    age,
    gender,
    image,
  } = data;

  return (
    <Card variant="clickable" onClick={() => onClick(id)}>
      <SearchCardHeaderBlock>
        <div className="flex flex-col justify-between gap-4 xl:flex-row">
          <div className="flex flex-col gap-2">
            <SearchCardHeaderBlock.SearchCardHeaderTitle
              name={name}
              position={position}
              image={image}
              isHiring={isHiring}
            />
            <SearchCardHeaderBlock.SearchCardHeaderDetails
              city={city}
              education={education}
              creationDate={creationDate}
              coordinates={coordinates}
              age={age}
              gender={gender}
            />
          </div>
          <SearchCardHeaderBlock.SearchCardHeaderSideDetails
            employmentStartDate={employmentStartDate}
            views={views}
            applicantsQuantity={applicantsQuantity}
          />
        </div>
        {about && (
          <SearchCardHeaderBlock.SearchCardHeaderAdditionalInfo
            content={
              <Card className="bg-secondary px-6 py-2 pb-6">
                <TypographyH5 className="py-3">
                  {isHiring ? "Чем предстоит заниматься:" : "Обо мне / Навыки / Задачи:"}
                </TypographyH5>
                {isHiring ? <ThirdPartyHtmlComponent markup={about} /> : about}
              </Card>
            }
          />
        )}
      </SearchCardHeaderBlock>
      <SearchCardDetailsBlock salary={salary} employment={employment} schedule={schedule} />
      <SearchCardOperationsFooterBlock onClick={onClick} phone={phone} id={id} />
    </Card>
  );
};
