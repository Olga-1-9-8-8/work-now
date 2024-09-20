import { XCircle } from "lucide-react";
import { useEffect } from "react";
import { useDebounce, useUrl } from "../../../hooks";
import { Button } from "../../../ui/buttons/Button";
import { Input } from "../../../ui/inputs/Input";

interface DebouncedSearchInputProps {
  paramKey: string;
  defaultSearchTerm?: string;
  onSearchTermChange?: (value: string) => void;
  placeholder?: string;
  debounceDelay?: number;
}

export const DebouncedSearchInput = ({
  paramKey,
  defaultSearchTerm = "",
  onSearchTermChange,
  placeholder,
  debounceDelay = 300,
}: DebouncedSearchInputProps) => {
  const { setParam } = useUrl();
  const debouncedSearchTerm = useDebounce(defaultSearchTerm, debounceDelay);

  useEffect(() => {
    setParam(paramKey, debouncedSearchTerm);
    setParam("offset", "1");
  }, [debouncedSearchTerm, paramKey, setParam]);

  const handleChange = (value: string) => {
    onSearchTermChange?.(value);
  };

  return (
    <div className="relative flex-1">
      <Input
        className="border-primary-extraDark pr-11 text-base"
        placeholder={placeholder}
        value={defaultSearchTerm}
        onChange={(e) => handleChange(e.target.value)}
      />
      {defaultSearchTerm && (
        <Button
          onClick={() => handleChange("")}
          variant="ghost"
          size="icon"
          className="absolute right-2 top-0"
          aria-label="Clear search input"
        >
          <XCircle size={21} className="fill-primary-extraDark stroke-background" />
        </Button>
      )}
    </div>
  );
};
