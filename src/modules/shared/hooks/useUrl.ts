import { useSearchParams } from "react-router-dom";

export const useUrl = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getParams = (key: string) => {
    return searchParams.get(key)?.split(",");
  };

  const setParam = (key: string, value: string | null) => {
    if (value === null) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }

    setSearchParams(searchParams);
  };

  const removeParam = (key: string) => {
    searchParams.delete(key);
    setSearchParams(searchParams);
  };

  return {
    getParams,
    setParam,
    removeParam,
  };
};
