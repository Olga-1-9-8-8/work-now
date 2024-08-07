import { FaPerson } from "react-icons/fa6";
import { GenderType, getGenderTitle } from "../../../../../../../../types";
import { getRightNounYearDeclension } from "../../../../../../../../utils/helpers";

interface DetailsCardHeaderTitlePersonalDataProps {
  gender?: GenderType;
  age?: number | string;
  isHiring?: boolean;
}

export const DetailsCardHeaderTitlePersonalData = ({
  gender,
  age,
  isHiring,
}: DetailsCardHeaderTitlePersonalDataProps) => {
  const title = [
    isHiring && "Требуемый пол: ",
    gender ? getGenderTitle(gender) : "Пол не указан",
    age && `/ ${getRightNounYearDeclension(String(age))}`,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <p className="flex items-center gap-1 text-sm font-semibold text-primary-extraDark">
      <FaPerson size={17} className="fill-primary-extraDark" />
      {title}
    </p>
  );
};
