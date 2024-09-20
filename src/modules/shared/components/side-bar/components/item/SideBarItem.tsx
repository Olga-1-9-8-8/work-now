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
import { SideBarItemButtonReset } from "../button/SideBarItemButton";

interface SideBarItemProps {
  value: string;
  title: string;
  items: Required<UniversalItemType<string>>[];
  defaultSearchTerm?: string;
  onSearchTermChange?: (value: string) => void;
}

export const SideBarItem = ({
  items,
  value,
  title,
  defaultSearchTerm = "",
  onSearchTermChange,
}: SideBarItemProps) => {
  const { setParam } = useUrl();
  const [canShow, setCanShow] = useState(false);

  const updateParams = (selectedValues: string[]) => {
    const selectedValuesString = selectedValues.join(",");
    setCanShow(selectedValues.length > 0);
    setParam(value, selectedValuesString);
    setParam("offset", "1");
    onSearchTermChange?.(selectedValuesString);
  };

  return (
    <Accordion type="single" collapsible className="w-full" defaultValue={`item-${value}`}>
      <AccordionItem value={`item-${value}`}>
        <AccordionTrigger className="py-1 hover:no-underline">
          <div className="flex min-h-10 items-center gap-4">
            <TypographyH6 className="text-nowrap ">{title}</TypographyH6>
            {canShow && <SideBarItemButtonReset onClick={() => updateParams([])} />}
          </div>
        </AccordionTrigger>

        <AccordionContent>
          <MultiSelect
            options={items}
            title={value}
            defaultValue={defaultSearchTerm ? defaultSearchTerm.split(",") : []}
            onValueChange={updateParams}
            variant="list"
            expandable
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
