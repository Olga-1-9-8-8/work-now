import { useEffect, useState } from "react";

export const useLocalStorageState = (initialState: any[], key: string) => {
  const [value, setValue] = useState<any>(() => {
    const storedValue = localStorage.getItem("watched");
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
