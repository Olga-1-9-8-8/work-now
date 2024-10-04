import { searchConfig } from "../../../../shared/configs";
import { LanguageType } from "../../../../shared/configs/internationalization/InternationalizationConfig";
import { useLanguageSwitcher } from "../../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { HomeInfoListItems } from "./items/HomeInfoListItems";

export const HomeInfoList = () => {
  const { language } = useLanguageSwitcher("home");

  return (
    <div className="flex flex-col flex-wrap gap-10 px-2 py-10 md:flex-row md:gap-20">
      {Object.entries(searchConfig[language as LanguageType]).map(([title, items]) => (
        <HomeInfoListItems key={title} title={title} items={items} />
      ))}
    </div>
  );
};
