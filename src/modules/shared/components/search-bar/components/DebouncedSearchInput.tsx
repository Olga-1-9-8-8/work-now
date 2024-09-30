import { XCircle } from "lucide-react";
import { useEffect } from "react";
import { useDebounce, useUrl } from "../../../hooks";
import { Button } from "../../../ui/buttons/Button";
import { Input } from "../../../ui/inputs/Input";
import { cn } from "../../../utils";

interface DebouncedSearchInputProps {
  paramKey: string;
  defaultSearchTerm?: string;
  onSearchTermChange?: (value: string) => void;
  placeholder?: string;
  debounceDelay?: number;
  className?: string;
}

export const DebouncedSearchInput = ({
  paramKey,
  defaultSearchTerm = "",
  onSearchTermChange,
  placeholder,
  debounceDelay = 300,
  className,
}: DebouncedSearchInputProps) => {
  const { setParam } = useUrl();
  const debouncedSearchTerm = useDebounce(defaultSearchTerm, debounceDelay);

  useEffect(() => {
    setParam(paramKey, debouncedSearchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm, paramKey]);

  const handleChange = (value: string) => {
    onSearchTermChange?.(value);
  };

  return (
    <div className={cn("relative flex-1", className)}>
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
