import { useCallback, useEffect } from "react";
import { Toggles } from "../../../../../shared/components/toggles";
import { LanguageType } from "../../../../../shared/configs";
import { useUrl } from "../../../../../shared/hooks";
import { useLanguageSwitcher } from "../../../../../shared/widgets/languages-switcher";
import { DEFAULT_LAST_DAYS } from "../../../../const";
import { toggleOptions } from "./config/toggleOptions";

export const HomeChartsOverviewToggles = () => {
  const { setParam, getParam } = useUrl();
  const { language } = useLanguageSwitcher("home");

  const handleLastValueChange = useCallback(
    (lastValue: string) => {
      setParam("last", lastValue);
    },
    [setParam],
  );

  useEffect(() => {
    const urlLastValue = getParam("last");

    if (!urlLastValue) {
      setParam("last", DEFAULT_LAST_DAYS);
    }
  }, [getParam, setParam]);

  return (
    <Toggles
      className="flex w-full flex-col gap-4 text-nowrap md:flex-row"
      variant="primary"
      type="single"
      options={toggleOptions[language as LanguageType]}
      value={getParam("last") ?? DEFAULT_LAST_DAYS}
      onValueChange={handleLastValueChange}
    />
  );
};
