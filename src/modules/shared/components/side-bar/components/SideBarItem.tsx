import { useState } from "react";
import { UniversalItemType } from "../../../types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../ui/accordion/Accordion";
import { Button } from "../../../ui/buttons/Button";
import { TypographyH6 } from "../../../ui/typography/TypographyH6";
import { ExpandableMultiSelect } from "./item/ExpandableMultiSelect";

interface SideBarItemProps {
  value: string;
  title: string;
  items: Required<UniversalItemType<string>>[];
}

export const SideBarItem = ({ items, value, title }: SideBarItemProps) => {
  const [canShow, setCanShow] = useState(false);

  const handleReset = () => setCanShow(false);

  return (
    <Accordion type="single" collapsible className="w-full" defaultValue={`item-${value}`}>
      <AccordionItem value={`item-${value}`}>
        <AccordionTrigger className="py-1 hover:no-underline">
          <div className="flex min-h-10 items-center gap-4">
            <TypographyH6 className="text-nowrap ">{title}</TypographyH6>
            {canShow && (
              <Button
                asChild
                className="p-0 text-muted-foreground underline decoration-muted-foreground decoration-dashed"
                variant="link"
                onClick={(e) => {
                  e.stopPropagation();
                  handleReset();
                }}
              >
                Сбросить
              </Button>
            )}
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ExpandableMultiSelect items={items} title={value} onSetCanShow={setCanShow} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
