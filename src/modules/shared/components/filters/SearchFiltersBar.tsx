import { searchOptionsConfig } from "../../configs";
import { SwitchWithLabel } from "../../ui/switch/SwitchWithLabel";
import { FiltersSelect } from "./select/FiltersSelect";

export const SearchFiltersBar = () => {
  const { employment, schedule } = searchOptionsConfig;

  return (
    <div className="flex items-center gap-8">
      <FiltersSelect title={employment.title} options={employment.options} />
      <FiltersSelect title={schedule.title} options={schedule.options} />
      <SwitchWithLabel label="Высшее" />
      <SwitchWithLabel label="Полная занятость" />
      <SwitchWithLabel label="Стажировка" />
    </div>
  );
};
