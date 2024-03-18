import { useEffect } from "react";

export const useKey = (key: string, action: () => void) => {
  useEffect(() => {
    const callback = (event: any) => {
      if (event.code.toLowerCase === key.toLowerCase) {
        action();
      }
    };

    document.addEventListener("keydown", callback);
    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [action, key]);
};
