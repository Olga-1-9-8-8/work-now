import { XCircle } from "lucide-react";
import { useEffect } from "react";
import { useDebounce, useUrl } from "../../../hooks";
import { Button } from "../../../ui/buttons/Button";
import { Input } from "../../../ui/inputs/Input";

interface DebouncedSearchInputProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  paramName: string;
  placeholder?: string;
  debounceDelay?: number;
}

export const DebouncedSearchInput = ({
  searchTerm,
  setSearchTerm,
  paramName,
  placeholder,
  debounceDelay = 300,
}: DebouncedSearchInputProps) => {
  const debouncedSearchTerm = useDebounce(searchTerm, debounceDelay);
  const { setParam } = useUrl();

  useEffect(() => {
    if (debouncedSearchTerm) {
      setParam(paramName, debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, paramName, setParam]);

  return (
    <div className="relative flex-1">
      <Input
        className="border-primary-extraDark pr-11 text-base"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <Button
          onClick={() => {
            setSearchTerm("");
            setParam(paramName, "");
          }}
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
