import { UniversalCardItemType } from "../../../types";
import { Card } from "../../../ui/card/Card";
import { TypographyH5 } from "../../../ui/typography/TypographyH5";
import { ThirdPartyHtmlComponent } from "../../third-party-html";
import { SearchCardDetailsBlock } from "./block/SearchCardDetailsBlock";
import { SearchCardOperationsFooterBlock } from "./block/footer/SearchCardOperationsFooterBlock";
import { SearchCardHeaderBlock } from "./block/header/SearchCardHeaderBlock";

interface SearchCardProps<T extends number | string> {
  data: UniversalCardItemType;
  onClick: (id: T, companyCode?: string) => void;
  isHiring?: boolean;
}

export const SearchCard = <T extends number | string>({
  data,
  onClick,
  isHiring = false,
}: SearchCardProps<T>) => {
  const {
    position,
    about,
    salary,
    employment,
    city,
    schedule,
    id,
    companyCode,
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
    isInApplies,
    isInFavorites,
  } = data;

  return (
    <Card variant="clickable" onClick={() => onClick(id as T, companyCode)}>
      <SearchCardHeaderBlock>
        <div className="flex flex-col justify-between gap-4 xl:flex-row">
          <div className="flex flex-col gap-2">
            <SearchCardHeaderBlock.SearchCardHeaderTitle
              userName={userName}
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
      <SearchCardOperationsFooterBlock
        phone={phone}
        id={id}
        isInApplies={isInApplies}
        isInFavorites={isInFavorites}
      />
    </Card>
  );
};
