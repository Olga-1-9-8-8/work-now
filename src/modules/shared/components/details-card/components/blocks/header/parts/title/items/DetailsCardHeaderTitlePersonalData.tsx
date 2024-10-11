import { FaPerson } from "react-icons/fa6";
import { LanguageType } from "../../../../../../../../configs";
import { GenderType, getGenderTitle } from "../../../../../../../../types";
import { useLanguageSwitcher } from "../../../../../../../../widgets/languages-switcher/hooks/useLanguageSwitcher";

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
  const { t, language } = useLanguageSwitcher("shared");

  const title = [
    isHiring && t("shared.details.card.personalData.gender.title"),
    getGenderTitle(language as LanguageType, gender),
    age && `/ ${t("shared.details.card.personalData.age.title", { age })}`,
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
