import { useState } from "react";
import { useUrl } from "../../../../hooks";
import { UniversalItemType } from "../../../../types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../ui/accordion/Accordion";
import { MultiSelect } from "../../../../ui/form-control/select/multi/MultiSelect";
import { TypographyH6 } from "../../../../ui/typography/TypographyH6";

interface SideBarItemProps {
  value: string;
  title: string;
  items: Required<UniversalItemType<string>>[];
}

export const SideBarItem = ({ items, value, title }: SideBarItemProps) => {
  const { setParam, getParam } = useUrl();
  const [canShow, setCanShow] = useState(false);

  const handleChange = (selectedValues: string[]) => {
    setCanShow(selectedValues.length > 0);
    setParam(value, selectedValues.join(","));
    setParam("offset", "1");
  };

  const handleReset = (
    e: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>,
  ) => {
    e.stopPropagation();
    setCanShow(false);
    setParam(value, "");
  };

  return (
    <Accordion type="single" collapsible className="w-full" defaultValue={`item-${value}`}>
      <AccordionItem value={`item-${value}`}>
        <AccordionTrigger className="py-1 hover:no-underline">
          <div className="flex min-h-10 items-center gap-4">
            <TypographyH6 className="text-nowrap ">{title}</TypographyH6>
            {canShow && (
              <span
                role="button"
                className="p-0 text-sm text-muted-foreground underline decoration-muted-foreground decoration-dashed"
                onClick={handleReset}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleReset(e);
                  }
                }}
              >
                Сбросить
              </span>
            )}
          </div>
        </AccordionTrigger>

        <AccordionContent>
          <MultiSelect
            options={items}
            title={value}
            defaultValue={getParam(value)?.split(",") ?? []}
            onValueChange={handleChange}
            variant="list"
            expandable
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
