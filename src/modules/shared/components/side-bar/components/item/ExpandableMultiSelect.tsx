import { useState } from "react";
import { useUrl } from "../../../../hooks";
import { UniversalItemType } from "../../../../types";
import { MultiSelect } from "../../../../ui/form-control/select/multi/MultiSelect";
import { MultiSelectList } from "../../../../ui/form-control/select/multi/list/MultiSelectList";

interface ExpandableMultiSelectProps {
  items: Required<UniversalItemType<string>>[];
  title: string;
  onSetCanShow: (value: boolean) => void;
}

export const ExpandableMultiSelect = ({
  items,
  title,
  onSetCanShow,
}: ExpandableMultiSelectProps) => {
  const { setParam, getParam } = useUrl();
  const [isExpand, setIsExpand] = useState(false);

  const handleChange = (value: string[]) => {
    onSetCanShow(value.length > 0);
    setParam(title, value.join(","));
    setParam("offset", "1");
  };

  const handleSetIsExpand = () => {
    setIsExpand(true);
  };
  return (
    <div className="relative flex flex-col p-0">
      {isExpand ? (
        <MultiSelect
          withSearch
          options={items as Required<UniversalItemType<string>>[]}
          placeholder="Я ищу ..."
          onValueChange={handleChange}
          defaultValue={getParam(title)?.split(",") ?? []}
          variant="list"
        />
      ) : (
        <MultiSelectList
          options={items as Required<UniversalItemType<string>>[]}
          onValueChange={handleChange}
          defaultValue={getParam(title)?.split(",") ?? []}
          onSetIsExpand={handleSetIsExpand}
        />
      )}
    </div>
  );
};
