import { useCallback } from "react";
import { NavigateOptions, useSearchParams } from "react-router-dom";

export const useUrl = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getParam = (key: string) => {
    return searchParams.get(key);
  };

  const getAllParams = () => {
    return [...searchParams.entries()];
  };
  const setParam = (key: string, value: string | null, options?: NavigateOptions) => {
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }

    setSearchParams(searchParams, { replace: true, ...options });
  };

  const removeParam = (key: string, options?: NavigateOptions) => {
    searchParams.delete(key);
    setSearchParams(searchParams, { replace: true, ...options });
  };

  return {
    getParam,
    getAllParams,
    setParam: useCallback(setParam, [searchParams, setSearchParams]),
    removeParam: useCallback(removeParam, [searchParams, setSearchParams]),
  };
};
