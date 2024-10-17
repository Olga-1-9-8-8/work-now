import { useCallback, useEffect, useMemo, useState } from "react";
import { LanguageType } from "../../../../configs";
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
import { capitalizeFirstLetter } from "../../../../utils/helpers";
import { useLanguageSwitcher } from "../../../../widgets/languages-switcher/hooks/useLanguageSwitcher";
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
  const { setParam, getParam } = useUrl();

  const { language } = useLanguageSwitcher("shared");

  const paramValue = getParam(value);
  const [canShow, setCanShow] = useState(false);

  const isItemExistInParamArr = useMemo(() => {
    const paramArr = paramValue ? paramValue.split(",") : [];
    return items.some((item) => paramArr.includes(item.value));
  }, [items, paramValue]);

  useEffect(() => {
    setCanShow(isItemExistInParamArr);
  }, [isItemExistInParamArr]);

  const updateParams = useCallback(
    (selectedValues: string[]) => {
      const selectedValuesString = selectedValues.join(",");
      setCanShow(selectedValues.length > 0);
      setParam(value, selectedValuesString);
      setParam("offset", "1");
      onSearchTermChange?.(
        selectedValues
          .map((i) =>
            i
              .split(" ")
              .map((part) => capitalizeFirstLetter(part))
              .join(" "),
          )
          .join(", "),
      );
    },
    [onSearchTermChange, setParam, value],
  );

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
            language={language as LanguageType}
            expandable
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
