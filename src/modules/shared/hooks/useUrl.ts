import { useCallback } from "react";
import { NavigateOptions, useSearchParams } from "react-router-dom";

export const useUrl = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getParam = useCallback((key: string) => searchParams.get(key), [searchParams]);
  const getAllParams = useCallback(() => [...searchParams.entries()], [searchParams]);

  const setParam = useCallback(
    (key: string, value: string | null, options?: NavigateOptions) => {
      if (value) {
        searchParams.set(key, value);
      } else {
        searchParams.delete(key);
      }

      setSearchParams(searchParams, { replace: true, ...options });
    },
    [searchParams, setSearchParams],
  );

  const clearAllParams = useCallback(() => {
    setSearchParams({});
  }, [setSearchParams]);

  const removeParam = useCallback(
    (key: string, options?: NavigateOptions) => {
      searchParams.delete(key);
      setSearchParams(searchParams, { replace: true, ...options });
    },
    [searchParams, setSearchParams],
  );

  return {
    getParam,
    getAllParams,
    setParam,
    removeParam,
    clearAllParams,
  };
};
