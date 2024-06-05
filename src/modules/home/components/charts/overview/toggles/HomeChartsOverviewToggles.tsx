import { useEffect } from "react";
import { Toggles } from "../../../../../shared/components/toggles";
import { useUrl } from "../../../../../shared/hooks";

export const HomeChartsOverviewToggles = () => {
  const { setParam, getParam } = useUrl();

  const handleValueChange = (value: string) => {
    setParam("last", value);
  };

  useEffect(() => {
    if (!getParam("last")) {
      setParam("last", "7");
    }
  }, [getParam, setParam]);

  return (
    <Toggles
      className=" flex w-full flex-col gap-4  text-nowrap md:flex-row"
      variant="primary"
      type="single"
      options={[
        { value: "7", title: "За прошлую неделю" },
        { value: "30", title: "За прошлый месяц" },
        { value: "365", title: "За прошлый год" },
      ]}
      defaultValue="7"
      onValueChange={handleValueChange}
    />
  );
};
