import { filterConfig, LanguageType } from "../../../../configs";
import { useUrl } from "../../../../hooks";
import { UniversalItemType } from "../../../../types";
import { MultiSelect } from "../../../../ui/form-control/select/multi/MultiSelect";
import { useLanguageSwitcher } from "../../../../widgets/languages-switcher";

export const SearchFiltersBarSelect = () => {
  const { getParam, setParam } = useUrl();
  const { language } = useLanguageSwitcher("shared");

  const handleChange = (value: string[], title: string) => {
    setParam(title, value.join(","));
    setParam("offset", "1");
  };
  return (
    <ul className="flex w-full flex-col flex-wrap gap-6 sm:flex-row">
      {Object.entries(filterConfig[language as LanguageType]).map(([title, option]) => (
        <li key={title} className="flex-1">
          <MultiSelect
            options={option.items as Required<UniversalItemType<string>>[]}
            placeholder={option.title}
            onValueChange={(value) => handleChange(value, title)}
            defaultValue={getParam(title)?.split(",") ?? []}
            language={language as LanguageType}
          />
        </li>
      ))}
    </ul>
  );
};
