import { searchOptionsConfig } from "../../configs";
import { SwitchWithLabel } from "../../ui/switch/SwitchWithLabel";
import { FiltersSelect } from "./select/FiltersSelect";

export const SearchFiltersBar = () => {
  const { employment, schedule } = searchOptionsConfig;

  return (
    <div className="flex flex-col flex-wrap gap-8 sm:flex-row sm:items-center">
      <div className="flex flex-col gap-8 sm:flex-row">
        <FiltersSelect title={employment.title} options={employment.options} />
        <FiltersSelect title={schedule.title} options={schedule.options} />
      </div>
      <div className="flex flex-col gap-8 sm:flex-row">
        <SwitchWithLabel label="Высшее" />
        <SwitchWithLabel label="Полная занятость" />
        <SwitchWithLabel label="Стажировка" />
      </div>
    </div>
  );
};
