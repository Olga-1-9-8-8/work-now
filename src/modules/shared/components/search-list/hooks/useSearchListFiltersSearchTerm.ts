import { useCallback, useMemo, useState } from "react";
import { useUrl } from "../../../hooks";
import { capitalizeFirstLetter } from "../../../utils/helpers";

export const useSearchListFiltersSearchTerm = () => {
  const { getParam } = useUrl();

  const fetchAndCapitalizeParam = (key: string) => {
    const value = getParam(key);
    return value
      ? value
          .split(",")
          .map((i) =>
            i
              .split(" ")
              .map((part) => capitalizeFirstLetter(part))
              .join(" "),
          )
          .join(", ")
      : "";
  };

  const [searchTerms, setSearchTerms] = useState(() => ({
    position: fetchAndCapitalizeParam("position"),
    cities: fetchAndCapitalizeParam("cities"),
    username: fetchAndCapitalizeParam("username"),
  }));

  const handleSearchTermChange = useCallback((key: keyof typeof searchTerms, value: string) => {
    setSearchTerms((prevSearchTerms) => ({ ...prevSearchTerms, [key]: value }));
  }, []);

  return useMemo(
    () => ({
      searchTerms,
      onSearchTermChange: handleSearchTermChange,
    }),
    [searchTerms, handleSearchTermChange],
  );
};
