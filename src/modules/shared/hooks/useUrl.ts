import { useSearchParams } from "react-router-dom";

export const useUrl = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getParam = (key: string) => {
    return searchParams.get(key);
  };

  const getAllParams = () => {
    return [...searchParams.entries()];
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
    getParam,
    getAllParams,
    setParam,
    removeParam,
  };
};
