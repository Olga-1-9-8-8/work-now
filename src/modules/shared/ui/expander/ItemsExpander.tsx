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
    <div>
      {visibleItems.map((element, index) => render(element, index))}
      {showExpandButton && (
        <Button
          variant="link"
          onClick={() => setIsExpand((previous) => !previous)}
          className="w-full"
        >
          <ButtonIcon />
          {isExpand ? "Свернуть" : "Показать еще"}
        </Button>
      )}
    </div>
  );
};
