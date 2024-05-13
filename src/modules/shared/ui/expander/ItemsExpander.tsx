import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "../buttons/Button";

interface SidebarSectionProps<T> {
  visibleItemsCount?: number;
  items: T[];
  render: (item: T, index: number) => JSX.Element;
}

export const ItemsExpander = <T extends {}>({
  items,
  visibleItemsCount = 5,
  render,
}: SidebarSectionProps<T>) => {
  const [isExpand, setIsExpand] = useState(false);
  const showExpandButton = items.length > visibleItemsCount;

  const visibleItems = isExpand ? items : items.slice(0, visibleItemsCount);

  const ButtonIcon = isExpand ? ChevronUp : ChevronDown;
  return (
    <div className="flex flex-col gap-4 py-4">
      {visibleItems.map((element, index) => render(element, index))}
      {showExpandButton && (
        <Button
          variant="link"
          onClick={() => setIsExpand((previous) => !previous)}
          className="flex gap-2 text-primary-extraDark"
        >
          <ButtonIcon />
          {isExpand ? "Свернуть" : "Показать еще"}
        </Button>
      )}
    </div>
  );
};
