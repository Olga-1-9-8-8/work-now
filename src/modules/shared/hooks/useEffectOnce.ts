import { EffectCallback, useEffect, useRef } from "react";

export const useEffectOnce = (effect: EffectCallback) => {
  const hasRun = useRef(false);
  useEffect(() => {
    if (!hasRun.current) {
      effect();
      hasRun.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
