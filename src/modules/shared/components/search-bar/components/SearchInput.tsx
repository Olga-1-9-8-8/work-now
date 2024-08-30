import { XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useDebounce, useUrl } from "../../../hooks";
import { Button } from "../../../ui/buttons/Button";
import { Input } from "../../../ui/inputs/Input";

export const SearchInput = () => {
  const { setParam, getParam } = useUrl();
  const [searchTerm, setSearchTerm] = useState(getParam("position") || "");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setParam("position", debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, setParam]);

  return (
    <div className="relative">
      <Input
        className="border-primary-extraDark pr-11 text-base"
        placeholder="Введите должность"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <Button
          onClick={() => setSearchTerm("")}
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
