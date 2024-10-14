import { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { Button } from "../../../../ui/buttons/Button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../ui/collapsible/Collapsible";
import { useLanguageSwitcher } from "../../../../widgets/languages-switcher/hooks/useLanguageSwitcher";
import { DebouncedSearchInput } from "../../../search-bar";
import { getPlaceholderByKey } from "../../utils/getPlaceholderByKey";

interface SearchListCollapsibleInputsProps<T extends Record<string, string>> {
  isHiring: boolean;
  searchTerms: T;
  onSearchTermChange: (key: keyof T, value: string) => void;
}

export const SearchListCollapsibleInputs = <T extends Record<string, string>>({
  isHiring,
  searchTerms,
  onSearchTermChange,
}: SearchListCollapsibleInputsProps<T>) => {
  const [open, setOpen] = useState(false);
  const Icon = open ? FaArrowUp : FaArrowDown;

  const { t } = useLanguageSwitcher("shared");

  const hasNonEmptySearchTermsAfterFirst = Object.values(searchTerms)
    .slice(1)
    .some((item) => item.length > 0);

  useEffect(() => {
    if (hasNonEmptySearchTermsAfterFirst) setOpen(true);
  }, [hasNonEmptySearchTermsAfterFirst]);

  return (
    <Collapsible className="flex flex-col gap-1 pb-4" open={open} onOpenChange={setOpen}>
      <DebouncedSearchInput
        paramKey="position"
        placeholder={getPlaceholderByKey("position", isHiring, t)}
        defaultSearchTerm={searchTerms.position}
        onSearchTermChange={(value) => onSearchTermChange("position", value)}
        className="m-1"
      />

      <CollapsibleContent className="flex flex-col gap-2 overflow-hidden pt-1 data-[state=open]:animate-collapsible-down">
        {Object.keys(searchTerms)
          .slice(1)
          .map((key) => (
            <DebouncedSearchInput
              key={key}
              paramKey={key}
              placeholder={getPlaceholderByKey(key, isHiring, t)}
              defaultSearchTerm={searchTerms[key as keyof typeof searchTerms]}
              onSearchTermChange={(value) => onSearchTermChange(key, value)}
              className="m-1"
            />
          ))}
      </CollapsibleContent>

      <CollapsibleTrigger asChild>
        <Button variant="secondary" size="sm" className="flex w-full gap-2 text-primary-extraDark ">
          <span>{open ? t("shared.filters.hide") : t("shared.filters.show")}</span>
          <Icon className="h-4 w-4 fill-primary-extraDark" />
        </Button>
      </CollapsibleTrigger>
    </Collapsible>
  );
};
