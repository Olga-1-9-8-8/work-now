import { useCallback, useEffect } from "react";
import { Toggles } from "../../../../../shared/components/toggles";
import { useUrl } from "../../../../../shared/hooks";
import { DEFAULT_LAST_DAYS } from "../../../../const";

const toggleOptions = [
  { value: "7", title: "За прошлую неделю" },
  { value: "30", title: "За прошлый месяц" },
  { value: "365", title: "За прошлый год" },
];

export const HomeChartsOverviewToggles = () => {
  const { setParam, getParam } = useUrl();

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
      options={toggleOptions}
      defaultValue={getParam("last") ?? DEFAULT_LAST_DAYS}
      onValueChange={handleLastValueChange}
    />
  );
};
