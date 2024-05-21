import { FaPerson } from "react-icons/fa6";
import { GenderType, getGenderTitle } from "../../../../../../../../types";
import { getRightNounYearDeclension } from "../../../../../../../../utils/helpers";

interface DetailsCardHeaderTitlePersonalDataProps {
  gender?: GenderType;
  age?: number;
}

export const DetailsCardHeaderTitlePersonalData = ({
  gender,
  age,
}: DetailsCardHeaderTitlePersonalDataProps) => {
  const genderTitle = gender ? getGenderTitle(gender) : "Пол не указан";
  const ageTitle = age ? `/ ${getRightNounYearDeclension(String(age))}` : "";
  return (
    <p className="flex items-center gap-1 text-sm font-semibold text-primary-extraDark">
      <FaPerson size={17} className="fill-primary-extraDark" />
      {genderTitle}
      {ageTitle}
    </p>
  );
};
