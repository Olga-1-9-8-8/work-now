import { useCallback, useEffect, useMemo, useState } from "react";
import { useUrl } from "../../../hooks";
import { capitalizeFirstLetter } from "../../../utils/helpers";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher/hooks/useLanguageSwitcher";

export const useSearchListFiltersSearchTerm = () => {
  const { getParam } = useUrl();

  const { language } = useLanguageSwitcher("shared");

  const fetchAndCapitalizeParam = useCallback(
    (key: string) => {
      const value = getParam(key);
      return value
        ? value
            .split(",")
            .map((i) =>
              i
                .split(" ")
                .filter(Boolean)
                .map((part) => capitalizeFirstLetter(part))
                .join(" "),
            )
            .join(", ")
        : "";
    },
    [getParam],
  );

  const initialSearchTerms = useMemo(
    () => ({
      position: fetchAndCapitalizeParam("position"),
      cities: fetchAndCapitalizeParam("cities"),
      username: fetchAndCapitalizeParam("username"),
    }),
    [fetchAndCapitalizeParam],
  );

  const [searchTerms, setSearchTerms] = useState(initialSearchTerms);

  const handleSearchTermChange = useCallback((key: keyof typeof searchTerms, value: string) => {
    setSearchTerms((prevSearchTerms) => ({ ...prevSearchTerms, [key]: value }));
  }, []);

  useEffect(() => {
    setSearchTerms(initialSearchTerms);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return useMemo(
    () => ({
      searchTerms,
      onSearchTermChange: handleSearchTermChange,
    }),
    [searchTerms, handleSearchTermChange],
  );
};
